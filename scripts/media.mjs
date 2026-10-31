#!/usr/bin/env node
import { resolve, join } from 'node:path';
import { mkdir, open, unlink } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';
import { loadEnvFile } from 'node:process';
import { openLibrary, scan, selectItems, optimizeItem, uploadItem, generateFeed, writeJson, checkVideoTools } from './media/pipeline.mjs';

const { values, positionals } = parseArgs({ allowPositionals: true, options: {
  batch: { type: 'string' }, id: { type: 'string' }, env: { type: 'string' },
  port: { type: 'string', default: '4317' },
  prefix: { type: 'string', default: 'recap' }, help: { type: 'boolean' },
} });
const [command, ...paths] = positionals;
const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const help = `Media pipeline (Node 22+, ffmpeg/ffprobe on PATH)
  npm run media -- review [--batch NAME] [--port 4317]
  npm run media -- doctor
  npm run media -- scan /path/to/folder [more paths] --batch 2026-saturday
  npm run media -- status [--batch NAME | --id ID]
  npm run media -- optimize [--batch NAME | --id ID]
  npm run media -- upload [--batch NAME | --id ID] [--env .env.local] [--prefix recap/2026]
  npm run media -- publish

Edit content/media-library.json: caption, alt, location, order, seedLikes,
crop (photos), aspectRatio (videos), and published. Then run publish to generate
the feed locally. Upload only sends optimized files, never originals.
`;

function safeError(error) {
  const token = process.env.BLOB_READ_WRITE_TOKEN;
  return token ? error.message.replaceAll(token, "[redacted]") : error.message;
}

let lock;
const lockPath = join(root, '.media/pipeline.lock');
try {
  if (values.help || !command) { console.log(help); }
  else {
    if (!['review', 'doctor', 'scan', 'status', 'optimize', 'upload', 'publish'].includes(command)) throw Error(help);
    if (command !== 'scan' && paths.length) throw Error('Unexpected positional arguments.');
    if (command === 'publish' && (values.batch || values.id)) throw Error('publish always generates the complete feed; remove batch/ID filters.');
    await mkdir(join(root, '.media'), { recursive: true });
    try { lock = await open(lockPath, 'wx'); await lock.writeFile(String(process.pid)); }
    catch (error) { if (error.code === 'EEXIST') throw Error('Another media command is running. If a previous process crashed, remove .media/pipeline.lock after checking it has stopped.'); throw error; }
    const context = await openLibrary(root);
    if (command === 'review') {
      const { startReview } = await import('./media/review.mjs');
      await startReview(root, values);
    } else if (command === 'doctor') {
      await checkVideoTools();
      console.log('FFmpeg and ffprobe are available.');
    } else if (command === 'scan') {
      if (await scan(context, paths, values.batch)) process.exitCode = 1;
    } else if (command === 'publish') {
      const feed = generateFeed(context.library.items);
      await writeJson(join(root, 'content/recap-generated.json'), feed);
      console.log(`Generated ${feed.length} posts. Commit/deploy to publish on the site.`);
    } else {
      const items = selectItems(context, values);
      if (command === 'optimize' && items.some(item => item.kind === 'video')) await checkVideoTools();
      let client;
      if (command === 'upload') {
        try { loadEnvFile(resolve(root, values.env ?? '.env.local')); }
        catch (error) { if (error.code !== 'ENOENT' || values.env) throw error; }
        if (!process.env.BLOB_READ_WRITE_TOKEN) throw Error('Set BLOB_READ_WRITE_TOKEN in .env.local or the environment.');
        const { head, put } = await import('@vercel/blob');
        const token = process.env.BLOB_READ_WRITE_TOKEN;
        client = { head: path => head(path, { token }), put: (path, body, options) => put(path, body, { ...options, token }) };
      }
      for (const item of items) {
        try {
          if (command === 'optimize') await optimizeItem(context, item);
          else if (command === 'upload') await uploadItem(context, item, client, values.prefix);
          else console.log(`${item.id} ${item.kind} ${item.batches.join(',')} ${item.uploaded?.media ? 'uploaded' : item.optimized ? 'optimized' : 'scanned'} ${item.published ? 'selected for feed' : 'draft'}`);
        } catch (error) { console.error(`${item.id}: ${safeError(error)}`); process.exitCode = 1; }
      }
    }
  }
} catch (error) {
  // Do not print SDK request objects, headers, or environment values.
  console.error(safeError(error));
  process.exitCode = 1;
} finally {
  if (lock) { await lock.close(); await unlink(lockPath); }
}
