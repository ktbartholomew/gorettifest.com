import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

// Usage: node scripts/normalize-sponsor-logo.mjs input output.webp
// All large sponsors share a 1200 × 600 transparent canvas. Equal visible
// bounding-box area balances wide wordmarks and compact emblems without distortion.
const [input, output] = process.argv.slice(2);
if (!input || !output || resolve(input) === resolve(output)) {
  throw new Error('Supply different input and output paths; retain the original logo.');
}
const { data, info } = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
let left = info.width, top = info.height, right = -1, bottom = -1;
for (let y = 0; y < info.height; y++) {
  for (let x = 0; x < info.width; x++) {
    if (data[(y * info.width + x) * info.channels + info.channels - 1] > 16) {
      left = Math.min(left, x); right = Math.max(right, x);
      top = Math.min(top, y); bottom = Math.max(bottom, y);
    }
  }
}
if (right < left) throw new Error('Logo has no visible pixels.');
// Keep a two-pixel fringe for antialiased edges.
left = Math.max(0, left - 2); top = Math.max(0, top - 2);
right = Math.min(info.width - 1, right + 2); bottom = Math.min(info.height - 1, bottom + 2);
const width = right - left + 1, height = bottom - top + 1;
const scale = Math.min(Math.sqrt(280000 / (width * height)), 1120 / width, 520 / height);
const resized = await sharp(data, { raw: info })
  .extract({ left, top, width, height })
  .resize(Math.round(width * scale), Math.round(height * scale))
  .png().toBuffer();
await mkdir(dirname(output), { recursive: true });
await sharp({ create: { width: 1200, height: 600, channels: 4, background: '#00000000' } })
  .composite([{ input: resized, gravity: 'centre' }])
  .webp({ lossless: true }).toFile(output);
