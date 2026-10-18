/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
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
