import { createServer } from 'node:http';
import { randomBytes } from 'node:crypto';
import { readFile, mkdir, access } from 'node:fs/promises';
import { join } from 'node:path';
import sharp from 'sharp';
import { openLibrary, selectItems, sourceFile, optimizeItem, cropRegion } from './pipeline.mjs';

export async function createReviewServer(root, options = {}) {
  const token = randomBytes(32).toString('hex');
  let saving = false;
  const server = createServer(async (request, response) => {
    response.setHeader('Cache-Control', 'no-store');
    response.setHeader('X-Content-Type-Options', 'nosniff');
    response.setHeader('Content-Security-Policy', "default-src 'self'; script-src 'unsafe-inline'; style-src 'unsafe-inline'; img-src 'self' data:; frame-ancestors 'none'");
    const send = (code, body, type = 'application/json') => {
      response.writeHead(code, { 'Content-Type': type });
      response.end(type === 'application/json' ? JSON.stringify(body) : body);
    };
    try {
      const expectedHost = `127.0.0.1:${server.address().port}`;
      if (request.headers.host !== expectedHost) return send(403, { error: 'Use the printed loopback URL.' });
      const url = new URL(request.url, `http://${expectedHost}`);
      if (request.method === 'GET' && url.pathname === '/') {
        const html = await readFile(new URL('./review.html', import.meta.url), 'utf8');
        return send(200, html.replace('__TOKEN__', token), 'text/html; charset=utf-8');
      }
      const context = await openLibrary(root);
      const items = selectItems(context, options).filter(item => item.kind === 'photo');
      if (request.method === 'GET' && url.pathname === '/items') {
        return send(200, items.map(item => ({ id: item.id, filename: item.source.filename,
          sourcePaths: context.local.items[item.id]?.sources ?? [],
          width: item.source.width, height: item.source.height, crop: item.crop, aspectRatio: item.aspectRatio,
          revision: item.optimized?.revision, optimizedPath: context.local.items[item.id]?.outputs?.media })));
      }
      const [, action, id] = url.pathname.split('/');
      const item = items.find(item => item.id === id);
      if (!item) return send(404, { error: 'Photo not found.' });
      if (request.method === 'GET' && action === 'original') {
        const directory = join(root, '.media/previews');
        await mkdir(directory, { recursive: true });
        const output = join(directory, `${item.id}.webp`);
        try { await access(output); }
        catch {
          const input = await sourceFile(context.local.items[id], item);
          await sharp(input).rotate().resize({ width: 1600, height: 1600, fit: 'inside', withoutEnlargement: true }).webp({ quality: 85 }).toFile(output);
        }
        return send(200, await readFile(output), 'image/webp');
      }
      if (request.method === 'GET' && action === 'optimized') {
        const output = context.local.items[id]?.outputs?.media;
        if (!output) return send(404, { error: 'No optimized image yet.' });
        return send(200, await readFile(output), 'image/webp');
      }
      if (request.method === 'POST' && action === 'crop') {
        if (request.headers['x-review-token'] !== token || request.headers.origin !== `http://${expectedHost}`) return send(403, { error: 'Invalid review session.' });
        if (saving) return send(409, { error: 'A crop is already being saved. Try again.' });
        saving = true;
        try {
          let body = '';
          for await (const chunk of request) {
            body += chunk;
            if (body.length > 4096) return send(413, { error: 'Request too large.' });
          }
          const crop = JSON.parse(body);
          cropRegion(crop, item.source.width, item.source.height);
          item.crop = { left: crop.left, top: crop.top, size: crop.size, ...(crop.ratio !== undefined ? { ratio: crop.ratio } : {}) };
          item.aspectRatio = crop.ratio ?? 'square';
          await optimizeItem(context, item, () => {});
          return send(200, { revision: item.optimized.revision, optimizedPath: context.local.items[id].outputs.media, crop: item.crop, aspectRatio: item.aspectRatio });
        } finally { saving = false; }
      }
      return send(405, { error: 'Method not allowed.' });
    } catch (error) { send(400, { error: error.message }); }
  });
  return server;
}

export async function startReview(root, options) {
  const port = Number(options.port ?? 4317);
  if (!Number.isInteger(port) || port < 1 || port > 65535) throw Error('Invalid review port.');
  const context = await openLibrary(root);
  if (!selectItems(context, options).some(item => item.kind === 'photo')) throw Error('No photos in this selection.');
  const server = await createReviewServer(root, options);
  await new Promise((resolve, reject) => {
    server.once('error', reject);
    server.listen(port, '127.0.0.1', resolve);
  });
  console.log(`Review crops: http://127.0.0.1:${port}\nCtrl+C to stop. This holds the media pipeline lock while reviewing.`);
  await new Promise(resolve => {
    const close = () => server.close(resolve);
    process.once('SIGINT', close);
    process.once('SIGTERM', close);
    server.once('close', () => {
      process.removeListener('SIGINT', close);
      process.removeListener('SIGTERM', close);
    });
  });
}
