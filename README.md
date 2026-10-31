This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

### Large sponsor logos

Large sponsors use a **1200 × 600 transparent canvas (2:1)**, displayed with the
same aspect ratio in the sponsor layout. Keep original artwork in
`public/img/sponsors/` and put standardized copies in `public/img/sponsors/large/`.

Run the same preparation command for each new large sponsor:

```sh
node scripts/normalize-sponsor-logo.mjs public/img/sponsors/original.png public/img/sponsors/large/sponsor-name.webp
```

The script trims transparent margins, scales the visible artwork to a common
bounding-box area (with width/height limits), and centers it on the shared canvas.
It preserves aspect ratio and produces lossless WebP. It also accepts SVG input.
Use the resulting `/img/sponsors/large/...` URL in the sponsor list. Source artwork
should already have a transparent background; the script does not remove opaque
backgrounds. Small sponsors keep their existing images and layout.

### Homepage modes and recap content

`content/site.ts` controls the homepage. Set `homeMode` to `"thank-you"` for the
recap, or `"festival"` to restore the original experience, then deploy. Navigation
and homepage metadata follow the same setting. The original homepage and its
Event structured data are isolated in `components/home/festival-home.tsx`.
Update festival dates/content before the next season; switching modes does not
advance the event year automatically.

Use the development homepage to edit imported posts (see below). `content/recap.ts`
contains the fallback placeholder posts. All initial
media are placeholders and captions are provisional. Keep post IDs stable so
saved hearts and anchor links continue to work. Photos support square, portrait, landscape, or original proportions; videos can
be square or vertical (9:16). Each post contains exactly one media item.

To replace a video placeholder, add public file URLs to its `media` entry:

```ts
media: {
  kind: "video",
  aspectRatio: "vertical",
  placeholderLabel: "Dancing by the stage",
  alt: "Families dancing beside the outdoor stage",
  src: "https://YOUR-STORE.public.blob.vercel-storage.com/2026/dancing.mp4",
  poster: "https://YOUR-STORE.public.blob.vercel-storage.com/2026/dancing-poster.jpg",
  // Optional WebVTT captions:
  captions: { src: "/captions/dancing.vtt", language: "en", label: "English" },
}
```

Use public, browser-playable files (MP4 with H.264/AAC is a practical choice),
not player/embed URLs. Video sources and posters attach within 400px of the viewport.
The most visible video autoplays, and all others pause. Leaving the viewport or
hiding the tab pauses playback. Custom play/pause and mute buttons sit at the bottom corners of each video,
including when a browser blocks autoplay. Videos start muted; changing mute on
any video updates the entire feed. Manual pauses are respected
until that video leaves and reenters the viewport. Videos preserve their composition.
Run `npm run test:video` to check playback coordination and shared mute behavior.
Poster images are optional but recommended. Captioned cross-origin videos need
CORS enabled on the media host. No Blob SDK or credentials are needed to display
public files. Video and native poster URLs do not require a Next.js image allowlist.

For photos, add `src` and meaningful `alt` text to the square photo entry.
Photos use Next.js image optimization: the current Vercel Blob store is already
allowed in `next.config.mjs`; add the exact hostname to `images.remotePatterns`
if using another store. Local `/img/...` paths also work.

Likes use fixed seed counts plus the current browser's saved heart. Seeds are
presentation values, **not measured community engagement**. Use integers 0–298;
the UI clamps seeds to that range so totals stay below 300. Local storage is
versioned and keyed by post ID. When storage is blocked, hearts work in memory
until the page reloads. There is no shared like service or account requirement.

Sponsor details live in `content/sponsors.ts`, shared by both homepage modes.
The thank-you feed inserts a logo-only ad break after every `adBreakEvery` posts
(configured in `content/site.ts`, default: 3). Each break contains exactly four
logos. Breaks advance through the sponsor list in order and wrap when exhausted;
short feeds may not show the entire list. Nine posts produce three breaks with
twelve logos. Thank-you navigation contains Home and About. Festival mode retains its original
sponsor section and navigation.

### Batch media pipeline

Requires Node.js 22+, installed npm dependencies, and working `ffmpeg` / `ffprobe`
on PATH. Check with `npm run media -- doctor`. On macOS, install FFmpeg with
`brew install ffmpeg` (or repair a broken installation with `brew reinstall ffmpeg`).

Pass any mix of individual files and folders; quote paths with spaces:

```sh
npm run media -- scan "/Volumes/Photos/GorettiFest" "/Users/keith/Movies/stage clip.mov" ./incoming --batch 2026-saturday
npm run media -- status --batch 2026-saturday
npm run media -- optimize --batch 2026-saturday
```

Folders are scanned recursively in filename order. Hidden directories, directory
symlinks, and unsupported file extensions are skipped. Supported inputs are JPEG,
PNG, WebP, HEIC/HEIF, TIFF, AVIF, MP4, MOV, M4V, WebM, and MKV; image codec support
depends on the local Sharp installation. Unsupported/corrupt files report an error
without discarding successfully scanned files. Identical file contents share one
stable ID even across batches. File paths stay in the ignored local registry.

Optimization preserves originals:

- Photos: auto-orient, strip metadata, selected crop (square by default), at most
  1200 pixels on either edge, WebP quality
  82, without upscaling. Change `crop` in the library before optimizing if the
  center crop misses the subject (`north`, `south`, `east`, `west`, corner names,
  `attention`, or `entropy` are also supported). Review the output before upload.
- Videos: H.264/AAC MP4, CRF 24, 30 fps, 128 kbps audio, 720×1280 vertical or
  720×720 square. Fit and pad rather than crop; smaller source imagery is not
  enlarged. Generates a WebP poster from the first frame. Fast-start MP4 places
  playback metadata at the front of the file. HDR inputs are rejected with an
  instruction to export SDR first. Clips are not trimmed automatically.
- Defaults live in `scripts/media/pipeline.mjs`. Changing the profile or crop
  invalidates optimized/uploaded metadata for that item on its next optimize.
  Rerunning commands skips unchanged work. Output size depends on clip duration
  and complexity; the CLI reports MB per optimized item.

Copy `.env.example` to `.env.local` and set `BLOB_READ_WRITE_TOKEN` for your public
Vercel Blob store. Never use a `NEXT_PUBLIC_` name for the token. `.env` files and
`.media/` are ignored by Git. Then upload explicitly:

```sh
npm run media -- upload --batch 2026-saturday --prefix recap/2026
# Optional alternative env file:
npm run media -- upload --id media-REPLACE_WITH_ID --env .env.media.local --prefix recap/2026
```

Only optimized files and video posters are uploaded. Public URLs and upload
progress are saved after each file. Content-hashed Blob paths avoid overwrites;
retries recover existing blobs and resume remaining work. The uploader uses the
[official Vercel Blob SDK](https://vercel.com/docs/vercel-blob/using-blob-sdk),
including multipart uploads for files larger than 5 MB. It does not delete remote
files or automatically publish uploaded items.

Three files serve different purposes:

| File | Purpose | Commit? |
| --- | --- | --- |
| `.media/registry.json` | Absolute source paths and optimized output locations | No |
| `content/media-library.json` | Media IDs, batches, dimensions, public URLs, and editorial fields | Yes |
| `content/recap-generated.json` | Validated posts used by the website | Yes |

Edit an item's `caption`, `alt`, `location`, `order`, and `seedLikes` in
`content/media-library.json`. Set `published` to `true` to include it. Keep IDs and
technical metadata unchanged. Then generate the complete selected feed:

```sh
npm run media -- publish
```

This writes the local feed manifest; it does not deploy the website. Entries are
sorted by `order`, with ID as a stable tie-breaker. Publication rejects missing
captions, alt text, categories, uploads, or invalid like counts. The feed switches
from placeholders to these posts once the generated list is nonempty. An empty
generated list restores the placeholder feed. Generated photo hosts are included
in Next.js's image allowlist; restart the dev server after publishing media from
a new host. To remove a post, set `published: false` and run `publish` again.

Use `--batch` or `--id` to narrow optimize/upload/status; without filters they
process the entire library. `publish` always rebuilds the complete feed. To move
to another computer, re-scan the original files to rebuild local path mappings.
Batch commands return a nonzero exit status when any file fails, while retaining
successful work. Run only one media command at a time. If one is forcibly killed,
check that it has stopped before removing `.media/pipeline.lock`.

Run `npm run test:media` for generated-image/video integration tests and mocked
Blob upload/retry tests. Video tests report a skip if FFmpeg is unavailable.

### Visual crop review

Start the local reviewer for a batch:

```sh
npm run media -- review --batch 2026-stills
```

Open `http://127.0.0.1:4317`. Select photos by original filename or use Previous /
Next. Each view shows the original source path, the uncropped image with a crop
selection, and the currently saved optimized crop. Choose an aspect ratio (original proportions, a preset, or custom), then drag the
crop or use the
Horizontal/Vertical sliders to reposition it; Zoom adjusts its size. Changes
appear immediately in the crop preview. **Save crop & regenerate** stores the
selection and creates a new optimized file from the original. **Center crop**
previews a centered crop at the selected ratio; it does not save until you click Save.

Original files are never modified. The reviewer uses smaller uncropped previews
for display, but saved crops are extracted from the full-resolution original.
Saving a changed crop invalidates that item's upload metadata; upload again before
regenerating the published feed. This tool does not upload or publish anything.

Use `--port 4318` if needed. The reviewer is a separate local-only tool, not a
website route, and holds the media pipeline lock while running. Stop it with
Ctrl+C before running other media commands. Manual selections are saved in the
library's `crop` field as `{ left, top, size, ratio }`: left/top are fractions of the
oriented original's width/height; ratio is crop width divided by height, and size scales the largest rectangle of
that ratio that fits the original (1 means the largest). Existing selections
without ratio remain square. The old
named crop presets remain supported.

### Edit the feed on the development homepage

With `npm run dev` running, open the normal homepage. In thank-you mode it shows
**every imported media item**, including drafts, in the actual feed layout with
sponsor breaks. Optimized local files are served directly by the dev server, so
neither the crop reviewer nor an upload is needed to preview new media.

Each post has fields for caption, alt text, location, order, seeded likes, and
**Include in production feed**. Click **Save changes** to persist that post to
`content/media-library.json` and refresh its rendered content/order in place.
Blank fields are allowed while drafting. **Hide editing controls** shows the
feed without the per-post forms. Unsaved changes are flagged; the browser warns
before leaving, and conflicting edits from another session are rejected.

When the selected posts are ready, **Prepare selected feed** validates all of
them and writes `content/recap-generated.json`. It requires captions, alt text,
categories, valid counts, and current uploaded media. This prepares the local
production input; it does not deploy. Development continues showing all drafts.
Production continues using only the prepared manifest.

The editor is conditionally imported only when `NODE_ENV === "development"`.
Its API returns 404 in production, and local asset requests are restricted to
registered files inside `.media/optimized`. Save requests must originate from
the same loopback dev server. The pipeline lock prevents simultaneous CLI/crop
reviewer writes; stop the standalone crop reviewer before saving inline edits.
