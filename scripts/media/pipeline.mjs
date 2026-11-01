import { createHash } from 'node:crypto';
import { createReadStream } from 'node:fs';
import { mkdir, readFile, writeFile, rename, readdir, stat } from 'node:fs/promises';
import { resolve, dirname, extname, join, basename } from 'node:path';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import sharp from 'sharp';
import { BlobNotFoundError } from '@vercel/blob';

const exec = promisify(execFile);
const photoExtensions = new Set(['.jpg', '.jpeg', '.png', '.webp', '.heic', '.heif', '.tif', '.tiff', '.avif']);
const videoExtensions = new Set(['.mp4', '.mov', '.m4v', '.webm', '.mkv']);
export const profile = { version: 1, photoSize: 1200, photoQuality: 82, videoWidth: 720, videoHeight: 1280, videoCrf: 24, videoFps: 30 };

export async function hashFile(path) {
  const hash = createHash('sha256');
  for await (const chunk of createReadStream(path)) hash.update(chunk);
  return hash.digest('hex');
}

export async function writeJson(path, data) {
  await mkdir(dirname(path), { recursive: true });
  const temporary = `${path}.${process.pid}.tmp`;
  await writeFile(temporary, JSON.stringify(data, null, 2) + '\n');
  await rename(temporary, path);
}

async function readJson(path, fallback) {
  try { return JSON.parse(await readFile(path, 'utf8')); }
  catch (error) { if (error.code === 'ENOENT') return fallback; throw error; }
}

export async function openLibrary(root) {
  const libraryPath = join(root, 'content/media-library.json');
  const localPath = join(root, '.media/registry.json');
  const library = await readJson(libraryPath, { version: 1, items: [] });
  const local = await readJson(localPath, { version: 1, items: {} });
  if (library.version !== 1 || local.version !== 1 || !Array.isArray(library.items)) throw Error('Unsupported media registry format.');
  return { root, library, local, async save() {
    await writeJson(localPath, local);
    await writeJson(libraryPath, library);
  } };
}

async function* files(path) {
  const info = await stat(path);
  if (info.isFile()) { yield resolve(path); return; }
  if (!info.isDirectory()) return;
  for (const entry of (await readdir(path, { withFileTypes: true })).sort((a, b) => a.name.localeCompare(b.name))) {
    // Do not follow directory symlinks or import pipeline output recursively.
    if (entry.name.startsWith('.') || entry.name === 'node_modules') continue;
    if (entry.isDirectory()) yield* files(join(path, entry.name));
    else if (entry.isFile()) yield join(path, entry.name);
  }
}

export async function checkVideoTools() {
  for (const tool of ['ffmpeg', 'ffprobe']) {
    try { await exec(tool, ['-version']); }
    catch { throw Error(`${tool} cannot run. Install or repair FFmpeg (macOS: brew reinstall ffmpeg), then retry.`); }
  }
}

export async function probeVideo(path) {
  const { stdout } = await exec('ffprobe', ['-v', 'error', '-show_streams', '-show_format', '-of', 'json', path], { maxBuffer: 4 * 1024 * 1024 });
  const data = JSON.parse(stdout);
  const stream = data.streams.find(s => s.codec_type === 'video' && !s.disposition?.attached_pic);
  if (!stream) throw Error('No video stream found.');
  const rotation = Number(stream.side_data_list?.find(s => s.rotation !== undefined)?.rotation ?? stream.tags?.rotate ?? 0);
  const rotated = Math.abs(rotation) % 180 === 90;
  return {
    width: rotated ? stream.height : stream.width,
    height: rotated ? stream.width : stream.height,
    duration: Number(stream.duration ?? data.format.duration),
    transfer: stream.color_transfer ?? null,
  };
}

export async function scan(context, paths, batch, log = console.log) {
  if (!batch) throw Error('scan requires --batch NAME.');
  if (!paths.length) throw Error('scan requires at least one file or folder.');
  let failures = 0;
  for (const path of paths) {
    for await (const file of files(resolve(path))) {
      const extension = extname(file).toLowerCase();
      const kind = photoExtensions.has(extension) ? 'photo' : videoExtensions.has(extension) ? 'video' : null;
      if (!kind) continue;
      try {
        const hash = await hashFile(file);
        const id = `media-${hash.slice(0, 20)}`;
        let item = context.library.items.find(item => item.id === id);
        if (!item) {
          const metadata = kind === 'photo' ? await sharp(file).metadata() : await probeVideo(file);
          const swap = kind === 'photo' && [5, 6, 7, 8].includes(metadata.orientation);
          const width = swap ? metadata.height : metadata.width;
          const height = swap ? metadata.width : metadata.height;
          if (!width || !height) throw Error('Cannot determine media dimensions.');
          item = {
            id, kind, batches: [batch], source: { filename: basename(file), sha256: hash, bytes: (await stat(file)).size, width, height,
              ...(kind === 'video' ? { duration: metadata.duration, transfer: metadata.transfer } : {}) },
            aspectRatio: kind === 'video' && height > width ? 'vertical' : 'square',
            // Photos are deliberately square. Review center crops before upload.
            crop: 'centre', caption: '', alt: '', location: '', published: false,
            order: context.library.items.length, seedLikes: 20 + parseInt(hash.slice(0, 4), 16) % 240,
          };
          context.library.items.push(item);
        } else if (!item.batches.includes(batch)) item.batches.push(batch);
        const local = context.local.items[id] ??= { sources: [] };
        if (!local.sources.includes(file)) local.sources.push(file);
        await context.save();
        log(`${id} ${kind} ${item.source.width}×${item.source.height} ${basename(file)}`);
      } catch (error) { failures++; log(`Failed to scan ${file}: ${error.message}`); }
    }
  }
  return failures;
}

export function selectItems(context, options) {
  const items = context.library.items.filter(item => (!options.batch || item.batches.includes(options.batch)) && (!options.id || item.id === options.id));
  if (!items.length) throw Error('No matching media. Scan files first or check the batch/ID.');
  return items;
}

function fingerprint(item) {
  return createHash('sha256').update(JSON.stringify({ hash: item.source.sha256, crop: item.crop, aspectRatio: item.aspectRatio, profile })).digest('hex').slice(0, 16);
}

async function artifact(path, contentType) {
  const metadata = contentType.startsWith('image/') ? await sharp(path).metadata() : await probeVideo(path);
  return { sha256: await hashFile(path), bytes: (await stat(path)).size, width: metadata.width, height: metadata.height, contentType };
}

export async function sourceFile(local, item) {
  for (const path of local?.sources ?? []) {
    try { if (await hashFile(path) === item.source.sha256) return path; }
    catch (error) { if (error.code !== 'ENOENT') throw error; }
  }
  throw Error('No unchanged source found. Re-scan the source folder if files moved or changed.');
}

export function cropRegion(crop, width, height) {
  const ratio = crop.ratio ?? 1;
  if (![crop.left, crop.top, crop.size, ratio].every(Number.isFinite) || crop.left < 0 || crop.top < 0 || crop.size <= 0 || crop.size > 1 || ratio < 0.1 || ratio > 10) throw Error('Invalid crop coordinates or aspect ratio.');
  const cropWidth = Math.max(1, Math.round(Math.min(width, height * ratio) * crop.size));
  const cropHeight = Math.max(1, Math.round(Math.min(height, width / ratio) * crop.size));
  const left = Math.round(crop.left * width);
  const top = Math.round(crop.top * height);
  if (left + cropWidth > width || top + cropHeight > height) throw Error('Crop extends beyond the original image.');
  return { left, top, width: cropWidth, height: cropHeight };
}

function validAspect(item) {
  return item.kind === 'photo'
    ? item.aspectRatio === 'square' || (Number.isFinite(item.aspectRatio) && item.aspectRatio >= 0.1 && item.aspectRatio <= 10)
    : item.kind === 'video' && ['square', 'vertical'].includes(item.aspectRatio);
}

export async function optimizeItem(context, item, log = console.log) {
  const local = context.local.items[item.id];
  const revision = fingerprint(item);
  if (item.optimized?.revision === revision && local?.outputs) {
    let valid = true;
    for (const [key, path] of Object.entries(local.outputs)) {
      try { valid &&= await hashFile(path) === item.optimized[key]?.sha256; } catch { valid = false; }
    }
    if (valid) { log(`${item.id} already optimized`); return; }
  }
  if (!validAspect(item)) throw Error('Invalid media aspect ratio.');
  const input = await sourceFile(local, item);
  const directory = join(context.root, '.media/optimized', item.id, revision);
  await mkdir(directory, { recursive: true });
  const outputs = {};
  if (item.kind === 'photo') {
    outputs.media = join(directory, 'photo.webp');
    if (typeof item.crop === 'object' && item.crop !== null) {
      const region = cropRegion(item.crop, item.source.width, item.source.height);
      const size = profile.photoSize;
      // Materialize orientation first so crop coordinates match the review image.
      const { data, info } = await sharp(input).rotate().raw().toBuffer({ resolveWithObject: true });
      await sharp(data, { raw: info }).extract(region).resize({ width: size, height: size, fit: 'inside', withoutEnlargement: true }).webp({ quality: profile.photoQuality }).toFile(outputs.media);
    } else {
      if (!['centre', 'north', 'south', 'east', 'west', 'northeast', 'northwest', 'southeast', 'southwest', 'attention', 'entropy'].includes(item.crop)) throw Error('Unsupported photo crop position.');
      const ratio = item.aspectRatio === 'square' ? 1 : item.aspectRatio;
      const region = cropRegion({ left: 0, top: 0, size: 1, ratio }, item.source.width, item.source.height);
      const scale = Math.min(1, profile.photoSize / Math.max(region.width, region.height));
      await sharp(input).rotate().resize(Math.round(region.width * scale), Math.round(region.height * scale), { fit: 'cover', position: item.crop }).webp({ quality: profile.photoQuality }).toFile(outputs.media);
    }
  } else {
    if (['smpte2084', 'arib-std-b67'].includes(item.source.transfer)) throw Error('HDR source: export an SDR copy before importing to avoid incorrect colors.');
    outputs.media = join(directory, 'video.mp4');
    const width = profile.videoWidth;
    const height = item.aspectRatio === 'vertical' ? profile.videoHeight : width;
    // Fit without cropping or upscaling; pad to the selected feed format.
    const filter = `scale=w='min(iw,${width})':h='min(ih,${height})':force_original_aspect_ratio=decrease:force_divisible_by=2,setsar=1,pad=${width}:${height}:(ow-iw)/2:(oh-ih)/2:color=0x0f172a,fps=${profile.videoFps}`;
    await exec('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-y', '-i', input, '-map', '0:v:0', '-map', '0:a:0?', '-vf', filter,
      '-c:v', 'libx264', '-preset', 'medium', '-crf', String(profile.videoCrf), '-pix_fmt', 'yuv420p',
      '-c:a', 'aac', '-b:a', '128k', '-ac', '2', '-map_metadata', '-1', '-map_chapters', '-1', '-movflags', '+faststart', outputs.media], { maxBuffer: 4 * 1024 * 1024 });
    outputs.poster = join(directory, 'poster.webp');
    const { stdout: posterFrame } = await exec('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-i', outputs.media, '-frames:v', '1', '-f', 'image2pipe', '-c:v', 'png', 'pipe:1'], { encoding: 'buffer', maxBuffer: 8 * 1024 * 1024 });
    await sharp(posterFrame).webp({ quality: 82 }).toFile(outputs.poster);
  }
  item.optimized = { revision, media: await artifact(outputs.media, item.kind === 'photo' ? 'image/webp' : 'video/mp4'),
    ...(outputs.poster ? { poster: await artifact(outputs.poster, 'image/webp') } : {}) };
  delete item.uploaded;
  local.outputs = outputs;
  await context.save();
  log(`${item.id} optimized: ${(item.optimized.media.bytes / 1024 / 1024).toFixed(2)} MB`);
}

export async function uploadItem(context, item, client, prefix, log = console.log) {
  if (!/^[a-zA-Z0-9][a-zA-Z0-9/_-]*$/.test(prefix)) throw Error('Blob prefix may contain letters, numbers, /, _, and -.');
  if (!item.optimized || item.optimized.revision !== fingerprint(item)) throw Error('Optimize this item before uploading (settings may have changed).');
  const outputs = context.local.items[item.id]?.outputs;
  if (!outputs) throw Error('Local optimized files missing; run optimize first.');
  item.uploaded ??= { revision: item.optimized.revision };
  for (const key of ['media', 'poster']) {
    const data = item.optimized[key];
    if (!data) continue;
    const path = outputs[key];
    if (!path || await hashFile(path) !== data.sha256) throw Error(`Optimized ${key} changed or missing; run optimize again.`);
    const extension = data.contentType === 'video/mp4' ? 'mp4' : 'webp';
    const pathname = `${prefix}/${item.id}/${data.sha256}.${extension}`;
    if (item.uploaded[key]?.pathname === pathname) continue;
    // Content-addressed names let retries recover an upload whose registry save failed.
    let blob;
    try {
      blob = await client.head(pathname);
      if (blob.size !== data.bytes) throw Error('Existing blob size does not match the local artifact.');
    } catch (error) {
      if (!(error instanceof BlobNotFoundError)) throw error;
      blob = await client.put(pathname, createReadStream(path), {
        access: 'public', addRandomSuffix: false, allowOverwrite: false,
        contentType: data.contentType, multipart: data.bytes > 5 * 1024 * 1024,
      });
    }
    const url = new URL(blob.url);
    if (url.protocol !== 'https:') throw Error('Upload did not return an HTTPS URL.');
    item.uploaded[key] = { url: blob.url, pathname };
    await context.save();
    log(`${item.id} uploaded ${key}`);
  }
}

export function generateFeed(items) {
  const ids = new Set();
  return items.filter(item => item.published).sort((a, b) => a.order - b.order || a.id.localeCompare(b.id)).map(item => {
    if (ids.has(item.id)) throw Error(`Duplicate media ID: ${item.id}`);
    ids.add(item.id);
    const fail = message => { throw Error(`${item.id}: ${message}`); };
    for (const key of ['caption', 'alt', 'location']) if (typeof item[key] !== 'string' || !item[key].trim()) fail(`add ${key} before publishing`);
    if (!validAspect(item)) fail('invalid media kind or aspect ratio');
    if (!Number.isFinite(item.order)) fail('order must be a number');
    if (!Number.isInteger(item.seedLikes) || item.seedLikes < 0 || item.seedLikes > 298) fail('seedLikes must be an integer from 0 to 298');
    if (!item.optimized || item.optimized.revision !== fingerprint(item) || item.uploaded?.revision !== item.optimized.revision) fail('optimize and upload current media before publishing');
    for (const key of item.kind === 'video' ? ['media', 'poster'] : ['media']) {
      if (!item.uploaded[key]?.url?.startsWith('https://')) fail(`missing uploaded ${key}`);
    }
    return { id: item.id, location: item.location, caption: item.caption, seedLikes: item.seedLikes,
      media: { kind: item.kind, aspectRatio: item.kind === 'photo' ? item.optimized.media.width / item.optimized.media.height : item.aspectRatio, placeholderLabel: item.location, alt: item.alt,
        src: item.uploaded.media.url, ...(item.kind === 'video' ? { poster: item.uploaded.poster.url } : {}) } };
  });
}
