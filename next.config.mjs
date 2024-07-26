/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => [
    {
      source: "/js/script.js",
      destination: "https://plausible.io/js/script.js",
    },
    {
      source: "/api/event",
      destination: "https://plausible.io/api/event",
    },
  ],
};

export default nextConfig;
