import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, rm, readFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { Readable } from 'node:stream';
import sharp from 'sharp';
import { openLibrary, scan, optimizeItem, hashFile, cropRegion, generateFeed } from './pipeline.mjs';
import { createReviewServer } from './review.mjs';

async function fixture(t) {
  const root = await mkdtemp(join(tmpdir(), 'gorettifest-crops-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  const photo = join(root, 'Two colors.png');
  const blue = await sharp({ create: { width: 100, height: 100, channels: 3, background: '#0000ff' } }).png().toBuffer();
  await sharp({ create: { width: 200, height: 100, channels: 3, background: '#ff0000' } }).composite([{ input: blue, left: 100, top: 0 }]).png().toFile(photo);
  const context = await openLibrary(root);
  await scan(context, [photo], 'test', () => {});
  return { root, photo, context, item: context.library.items[0] };
}

test('manual crop extracts selected pixels from intact original and rejects invalid bounds', async t => {
  const { photo, context, item } = await fixture(t);
  const hash = await hashFile(photo);
  item.crop = { left: .5, top: 0, size: 1 };
  await optimizeItem(context, item, () => {});
  const stats = await sharp(context.local.items[item.id].outputs.media).stats();
  assert.ok(stats.channels[2].mean > 240);
  assert.ok(stats.channels[0].mean < 10);
  item.uploaded = { revision: item.optimized.revision, media: { url: 'https://example.com/old.webp' } };
  item.crop = { left: 0, top: 0, size: .5 };
  await optimizeItem(context, item, () => {});
  const next = await sharp(context.local.items[item.id].outputs.media).metadata();
  assert.equal(next.width, 50);
  assert.equal(item.uploaded, undefined);
  assert.equal(await hashFile(photo), hash);
  for (const crop of [{ left: 1, top: 0, size: 1 }, { left: 0, top: -1, size: 1 }, { left: 0, top: 0, size: 0 }, { left: '0', top: 0, size: 1 }]) {
    assert.throws(() => cropRegion(crop, 200, 100));
  }
});

test('review routes show matching filenames, protect writes, and save/regenerate without publishing', async t => {
  const { root, context, item } = await fixture(t);
  await optimizeItem(context, item, () => {});
  const server = await createReviewServer(root, { batch: 'test' });
  server.address = () => ({ port: 4317 });
  async function request(url, options = {}) {
    const req = Readable.from(options.body ? [options.body] : []);
    Object.assign(req, { url, method: options.method ?? 'GET', headers: { host: '127.0.0.1:4317', ...options.headers } });
    let code, body;
    const response = { setHeader() {}, writeHead(value) { code = value; }, end(value) { body = value; } };
    await server.listeners('request')[0](req, response);
    return { code, body, json: () => JSON.parse(body) };
  }
  const page = await request('/');
  assert.equal(page.code, 200);
  const token = page.body.match(/const token='([^']+)'/)[1];
  const listing = (await request('/items')).json();
  assert.equal(listing[0].filename, 'Two colors.png');
  assert.ok(listing[0].sourcePaths[0].endsWith('Two colors.png'));
  assert.equal((await request('/original/'+item.id)).code, 200);
  assert.equal((await request('/optimized/'+item.id)).code, 200);
  assert.equal((await request('/original/unknown')).code, 404);
  assert.equal((await request('/items', { headers: { host: 'attacker.test:4317' } })).code, 403);
  const url = '/crop/'+item.id;
  assert.equal((await request(url, { method: 'POST', body: '{}' })).code, 403);
  const headers = { origin: 'http://127.0.0.1:4317', 'x-review-token': token };
  const crop = { left: .5, top: 0, size: 1 };
  assert.equal((await request(url, { method: 'POST', headers, body: JSON.stringify(crop) })).code, 200);
  const updated = await openLibrary(root);
  assert.deepEqual(updated.library.items[0].crop, crop);
  assert.equal(updated.library.items[0].published, false);
  assert.equal(updated.library.items[0].uploaded, undefined);
  assert.equal((await request(url, { method: 'POST', headers, body: JSON.stringify({ ...crop, left: 2 }) })).code, 400);
  assert.deepEqual((await openLibrary(root)).library.items[0].crop, crop);
  const landscape = { left: 0, top: 0, size: 1, ratio: 2 };
  const result = await request(url, { method: 'POST', headers, body: JSON.stringify(landscape) });
  assert.equal(result.code, 200);
  assert.equal(result.json().aspectRatio, 2);
  const restored = (await openLibrary(root)).library.items[0];
  assert.deepEqual(restored.crop, landscape);
  assert.equal(restored.optimized.media.width, 200);
  assert.equal(restored.optimized.media.height, 100);
  const html = await readFile(new URL('./review.html', import.meta.url), 'utf8');
  // Parse the client script so syntax errors cannot ship unnoticed.
  assert.doesNotThrow(() => new Function(html.match(/<script>([\s\S]+)<\/script>/)[1]));
});


test('portrait, landscape and original-ratio crops retain dimensions in generated feed', async t => {
  const { context, item } = await fixture(t);
  for (const [ratio, width, height] of [[2, 200, 100], [1.5, 150, 100], [.8, 80, 100], [9 / 16, 56, 100]]) {
    item.crop = { left: 0, top: 0, size: 1, ratio };
    item.aspectRatio = ratio;
    await optimizeItem(context, item, () => {});
    const metadata = await sharp(context.local.items[item.id].outputs.media).metadata();
    assert.deepEqual([metadata.width, metadata.height], [width, height]);
    Object.assign(item, { published: true, caption: 'Colors', location: 'Test', alt: 'Red and blue rectangles', uploaded: { revision: item.optimized.revision, media: { url: 'https://example.com/photo.webp' } } });
    assert.equal(generateFeed([item])[0].media.aspectRatio, width / height);
  }
  assert.throws(() => cropRegion({ left: 0, top: 0, size: 1, ratio: 0 }, 200, 100));
  assert.throws(() => cropRegion({ left: 0, top: 0, size: 1, ratio: 11 }, 200, 100));
});
