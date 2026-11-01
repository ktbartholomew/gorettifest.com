import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const recapMedia = require("./content/recap-generated.json");
// Allow only the exact hosts of published images, including a different Blob store.
const recapImageHosts = [...new Set(recapMedia
  .filter(post => post.media.kind === "photo")
  .map(post => new URL(post.media.src).hostname))];

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      ...recapImageHosts.map(hostname => ({ protocol: "https", hostname })),
      {
        protocol: "https",
        hostname: "kfpt3dd2rwiw8zff.public.blob.vercel-storage.com",
      },
    ],
  },
  // Public logo metadata can be read by the separately hosted letter studio.
  headers: async () => [
    {
      source: "/img/small/catalog.json",
      headers: [{ key: "Access-Control-Allow-Origin", value: "*" }],
    },
  ],
  rewrites: async () => [
    {
      source: "/js/script.js",
      destination: "https://plausible.io/js/script.hash.outbound-links.js",
    },
    {
      source: "/api/event",
      destination: "https://plausible.io/api/event",
    },
  ],
};

export default nextConfig;
