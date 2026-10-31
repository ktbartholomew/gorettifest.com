import { createHash } from 'node:crypto';
import { open, unlink, mkdir } from 'node:fs/promises';
import { join } from 'node:path';
import { openLibrary, generateFeed, writeJson } from './pipeline.mjs';

export function editVersion(item) {
  return createHash('sha256').update(JSON.stringify(item)).digest('hex');
}

export async function editorItems(root) {
  const context = await openLibrary(root);
  return context.library.items.slice().sort((a, b) => a.order - b.order || a.id.localeCompare(b.id)).map(item => {
    const output = context.local.items[item.id]?.outputs;
    const localUrl = key => `/api/dev/media?id=${encodeURIComponent(item.id)}&asset=${key}&v=${item.optimized?.revision ?? ''}`;
    return {
      id: item.id, filename: item.source.filename ?? item.id, kind: item.kind,
      location: item.location, caption: item.caption, alt: item.alt, order: item.order,
      seedLikes: item.seedLikes, published: item.published, version: editVersion(item),
      aspectRatio: item.kind === 'photo' ? (item.optimized ? item.optimized.media.width / item.optimized.media.height : item.source.width / item.source.height) : item.aspectRatio,
      src: output?.media ? localUrl('media') : item.uploaded?.media?.url,
      poster: output?.poster ? localUrl('poster') : item.uploaded?.poster?.url,
      uploaded: Boolean(item.uploaded?.media && item.uploaded.revision === item.optimized?.revision),
    };
  });
}

export async function withMediaLock(root, callback) {
  await mkdir(join(root, '.media'), { recursive: true });
  const path = join(root, '.media/pipeline.lock');
  let lock;
  try { lock = await open(path, 'wx'); }
  catch (error) {
    if (error.code === 'EEXIST') throw Error('Another media task is running. Stop the crop reviewer or wait for that task to finish, then save again.');
    throw error;
  }
  try { await lock.writeFile(String(process.pid)); return await callback(); }
  finally { await lock.close(); await unlink(path); }
}

export async function saveEditorial(root, input) {
  return withMediaLock(root, async () => {
    const context = await openLibrary(root);
    const item = context.library.items.find(item => item.id === input.id);
    if (!item) throw Error('Media not found.');
    if (editVersion(item) !== input.version) throw Error('This item changed elsewhere. Reload the page before saving to avoid overwriting those changes.');
    const fields = input.fields;
    if (!fields || typeof fields !== 'object') throw Error('Missing editorial fields.');
    for (const key of ['caption', 'alt', 'location']) {
      if (typeof fields[key] !== 'string' || fields[key].length > 5000) throw Error(`Invalid ${key}.`);
    }
    if (!Number.isFinite(fields.order) || !Number.isInteger(fields.seedLikes) || fields.seedLikes < 0 || fields.seedLikes > 298 || typeof fields.published !== 'boolean') throw Error('Invalid order, like count, or selection.');
    // Explicit whitelist: clients cannot replace source paths, crop data, or upload URLs.
    for (const key of ['caption', 'alt', 'location', 'order', 'seedLikes', 'published']) item[key] = fields[key];
    await context.save();
    return { version: editVersion(item) };
  });
}

export async function prepareFeed(root) {
  return withMediaLock(root, async () => {
    const context = await openLibrary(root);
    const errors = [];
    for (const item of context.library.items.filter(item => item.published)) {
      try { generateFeed([item]); }
      catch (error) { errors.push(`${item.source.filename}: ${error.message.replace(`${item.id}: `, '')}`); }
    }
    if (errors.length) throw Error(errors.join('\n'));
    const posts = generateFeed(context.library.items);
    await writeJson(join(root, 'content/recap-generated.json'), posts);
    return { count: posts.length };
  });
}
