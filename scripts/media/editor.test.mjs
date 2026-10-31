import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, rm, readFile, writeFile, mkdir } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { editorItems, saveEditorial, prepareFeed } from './editor.mjs';
import { openLibrary, scan, optimizeItem, uploadItem } from './pipeline.mjs';
import { BlobNotFoundError } from '@vercel/blob';
import sharp from 'sharp';

async function fixture(t) {
  const root = await mkdtemp(join(tmpdir(), 'gorettifest-editor-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  const path = join(root, 'photo.png');
  await sharp({ create: { width: 200, height: 100, channels: 3, background: '#f00' } }).png().toFile(path);
  const context = await openLibrary(root);
  await scan(context, [path], 'test', () => {});
  await optimizeItem(context, context.library.items[0], () => {});
  return { root, context };
}

test('draft preview, whitelisted edits, conflict detection, and validated production generation', async t => {
  const { root, context } = await fixture(t);
  const [item] = await editorItems(root);
  assert.equal(item.filename, 'photo.png');
  assert.equal(item.published, false);
  assert.ok(item.src.startsWith('/api/dev/media?'));
  assert.equal(item.uploaded, false);
  const fields = { caption: 'Food booth', alt: 'Volunteers serving food', location: 'Food', order: 4, seedLikes: 75, published: true, source: { filename: 'malicious' } };
  await saveEditorial(root, { id: item.id, version: item.version, fields });
  const [saved] = await editorItems(root);
  assert.equal(saved.caption, fields.caption);
  assert.equal(saved.order, 4);
  assert.equal(saved.filename, 'photo.png');
  await assert.rejects(saveEditorial(root, { id: item.id, version: item.version, fields }), /changed elsewhere/);
  await assert.rejects(saveEditorial(root, { id: item.id, version: saved.version, fields: { ...fields, seedLikes: 300 } }), /Invalid/);
  await assert.rejects(prepareFeed(root), /upload/);
  const fresh = await openLibrary(root);
  await uploadItem(fresh, fresh.library.items[0], {
    async head() { throw new BlobNotFoundError(); },
    async put(path, stream) { for await (const chunk of stream) assert.ok(chunk.length); return { pathname: path, url: `https://example.com/${path}` }; },
  }, 'test', () => {});
  assert.deepEqual(await prepareFeed(root), { count: 1 });
  const feed = JSON.parse(await readFile(join(root, 'content/recap-generated.json'), 'utf8'));
  assert.equal(feed[0].caption, fields.caption);
  assert.ok(!JSON.stringify(feed).includes('/api/dev/media'));
  const [current] = await editorItems(root);
  await saveEditorial(root, { id: current.id, version: current.version, fields: { ...fields, caption: '' } });
  await assert.rejects(prepareFeed(root), /caption/);
  assert.equal(JSON.parse(await readFile(join(root, 'content/recap-generated.json'), 'utf8'))[0].caption, fields.caption);
  assert.equal(context.library.items[0].source.filename, 'photo.png');
});

test('editor respects active pipeline locks', async t => {
  const { root } = await fixture(t);
  const [item] = await editorItems(root);
  await mkdir(join(root, '.media'), { recursive: true });
  await writeFile(join(root, '.media/pipeline.lock'), '123');
  await assert.rejects(saveEditorial(root, { id: item.id, version: item.version, fields: item }), /Another media task/);
  assert.equal(await readFile(join(root, '.media/pipeline.lock'), 'utf8'), '123');
});
