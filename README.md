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
