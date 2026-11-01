import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, copyFile, readFile, writeFile, rm, stat } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import sharp from 'sharp';
import { BlobNotFoundError } from '@vercel/blob';
import { openLibrary, scan, optimizeItem, uploadItem, generateFeed, probeVideo, checkVideoTools } from './pipeline.mjs';

const exec = promisify(execFile);
const quiet = () => {};

function fakeBlobClient() {
  const blobs = new Map();
  let puts = 0;
  return { blobs, get puts() { return puts; },
    async head(path) {
      if (!blobs.has(path)) throw new BlobNotFoundError();
      return blobs.get(path);
    },
    async put(path, body, options) {
      assert.equal(options.access, 'public');
      assert.equal(options.allowOverwrite, false);
      let size = 0;
      for await (const chunk of body) size += chunk.length;
      const blob = { url: `https://test.public.blob.vercel-storage.com/${path}`, pathname: path, size };
      blobs.set(path, blob); puts++; return blob;
    },
  };
}

test('multiple paths, deduplication, optimization, upload recovery, and curated feed', async t => {
  const root = await mkdtemp(join(tmpdir(), 'gorettifest-media-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  const source = join(root, 'source files');
  await mkdir(join(source, 'nested'), { recursive: true });
  const photo = join(source, 'photo.jpg');
  await sharp({ create: { width: 1600, height: 1000, channels: 3, background: '#ff8800' } }).jpeg().toFile(photo);
  await copyFile(photo, join(source, 'nested/copy.jpg'));
  await writeFile(join(source, 'ignored.txt'), 'not media');
  const second = join(root, 'second photo.png');
  await sharp({ create: { width: 300, height: 500, channels: 3, background: '#00ff00' } }).png().toFile(second);
  const context = await openLibrary(root);
  assert.equal(await scan(context, [source, second], 'first', quiet), 0);
  assert.equal(context.library.items.length, 2);
  await scan(context, [photo], 'second', quiet);
  const image = context.library.items.find(item => item.kind === 'photo');
  const secondItem = context.library.items.find(item => item.id !== image.id);
  assert.deepEqual(image.batches, ['first', 'second']);
  assert.equal(context.local.items[image.id].sources.length, 2);
  assert.ok(!(await readFile(join(root, 'content/media-library.json'), 'utf8')).includes(source));
  for (const item of context.library.items) await optimizeItem(context, item, quiet);
  assert.equal(image.optimized.media.width, 1000);
  assert.equal(image.optimized.media.height, 1000);
  const before = (await stat(context.local.items[image.id].outputs.media)).mtimeMs;
  await optimizeItem(context, image, quiet);
  assert.equal((await stat(context.local.items[image.id].outputs.media)).mtimeMs, before);
  const client = fakeBlobClient();
  for (const item of context.library.items) await uploadItem(context, item, client, 'recap/2026', quiet);
  assert.equal(client.puts, 2);
  await uploadItem(context, secondItem, client, 'recap/2026', quiet);
  assert.equal(client.puts, 2);
  delete secondItem.uploaded.media; // Simulate a successful upload followed by a failed registry write.
  await uploadItem(context, secondItem, client, 'recap/2026', quiet);
  assert.equal(client.puts, 2);
  assert.deepEqual(generateFeed(context.library.items), []);
  image.published = true;
  assert.throws(() => generateFeed(context.library.items), /add caption/);
  for (const item of context.library.items) Object.assign(item, { published: true, caption: 'Reviewed caption', alt: 'Reviewed description', location: 'Games' });
  secondItem.order = -1;
  const feed = generateFeed(context.library.items);
  assert.equal(feed[0].id, secondItem.id);
  assert.ok(feed[0].media.src.startsWith('https://'));
  assert.ok(!JSON.stringify(feed).includes('sha256'));
  image.seedLikes = 299;
  assert.throws(() => generateFeed(context.library.items), /seedLikes/);
  image.seedLikes = 100;
  image.crop = 'north';
  assert.throws(() => generateFeed(context.library.items), /optimize and upload/);
  await optimizeItem(context, image, quiet);
  assert.equal(image.uploaded, undefined);
  const reloaded = await openLibrary(root);
  assert.equal(reloaded.library.items.length, 2);
});

test('per-file scan failures, changed source detection, and failed uploads remain retryable', async t => {
  const root = await mkdtemp(join(tmpdir(), 'gorettifest-media-errors-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  const source = join(root, 'source'); await mkdir(source);
  await writeFile(join(source, 'broken.jpg'), 'broken');
  const photo = join(source, 'good.png');
  await sharp({ create: { width: 100, height: 100, channels: 3, background: '#000' } }).png().toFile(photo);
  const context = await openLibrary(root);
  assert.equal(await scan(context, [source], 'errors', quiet), 1);
  const item = context.library.items[0];
  await optimizeItem(context, item, quiet);
  await assert.rejects(uploadItem(context, item, { head: async () => { throw Error('Unauthorized'); } }, 'recap', quiet), /Unauthorized/);
  assert.equal(item.uploaded.media, undefined);
  const client = fakeBlobClient();
  await uploadItem(context, item, client, 'recap', quiet);
  assert.equal(client.puts, 1);
  await writeFile(photo, 'changed'); item.crop = 'north';
  await assert.rejects(optimizeItem(context, item, quiet), /No unchanged source/);
});


test('video transcode and poster generation', async t => {
  try { await checkVideoTools(); }
  catch (error) { t.skip(error.message); return; }
  const root = await mkdtemp(join(tmpdir(), 'gorettifest-video-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  const video = join(root, 'vertical clip.mov');
  await exec('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-f', 'lavfi', '-i', 'color=c=blue:s=180x320:r=10:d=0.4', '-c:v', 'libx264', '-pix_fmt', 'yuv420p', video]);
  const context = await openLibrary(root);
  assert.equal(await scan(context, [video], 'video', quiet), 0);
  const item = context.library.items[0];
  assert.equal(item.aspectRatio, 'vertical');
  await optimizeItem(context, item, quiet);
  const optimized = await probeVideo(context.local.items[item.id].outputs.media);
  assert.deepEqual([optimized.width, optimized.height], [720, 1280]);
  assert.ok(item.optimized.poster.bytes > 0);
  const client = fakeBlobClient();
  await uploadItem(context, item, client, 'recap', quiet);
  assert.equal(client.puts, 2);
  delete item.uploaded.poster;
  await uploadItem(context, item, client, 'recap', quiet);
  assert.equal(client.puts, 2);
  Object.assign(item, { published: true, caption: 'Performance', alt: 'Blue test frame', location: 'Music' });
  assert.ok(generateFeed([item])[0].media.poster.startsWith('https://'));
});
