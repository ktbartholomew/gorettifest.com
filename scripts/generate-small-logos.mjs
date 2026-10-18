import sharp from 'sharp';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const sources = JSON.parse(await readFile(new URL('./small-logo-sources.json', import.meta.url), 'utf8'));
const outputRoot = resolve(root, 'public/img/small');
const seen = new Set();
const images = [];
for (const source of sources) {
  if (seen.has(source.output)) throw new Error(`Duplicate output: ${source.output}`);
  seen.add(source.output);
  const input = resolve(root, `public${source.source}`);
  const output = resolve(outputRoot, source.output);
  if (!input.startsWith(resolve(root, 'public') + '/') || !output.startsWith(outputRoot + '/')) {
    throw new Error('Logo paths must remain inside their asset directories.');
  }
  await mkdir(dirname(output), { recursive: true });
  // Render SVG at high density before downsampling. Keep raster artwork at or
  // below its original size; retain alpha, canvas padding, and original colors.
  const { data, info } = await sharp(input, { density: 192 })
    .rotate()
    .resize({ width: 480, height: 240, fit: 'inside', withoutEnlargement: true })
    .toColourspace('srgb')
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toBuffer({ resolveWithObject: true });
  await writeFile(output, data);
  const path = `/img/small/${source.output}`;
  images.push({
    id: source.output.replace(/\.png$/, ''),
    name: source.name,
    category: source.category,
    featured: source.featured,
    source: source.source,
    path,
    url: `https://www.gorettifest.com${path}`,
    width: info.width,
    height: info.height,
    displayWidth: Math.round(info.width / 2),
    displayHeight: Math.round(info.height / 2),
    bytes: info.size,
    ...(source.website ? { website: source.website } : {}),
  });
}
await writeFile(resolve(outputRoot, 'catalog.json'), JSON.stringify({ version: 1, maxWidth: 480, maxHeight: 240, images }, null, 2) + '\n');
console.log(`Generated ${images.length} PNGs (${Math.round(images.reduce((n, x) => n + x.bytes, 0) / 1024)} KiB) and catalog.json`);
