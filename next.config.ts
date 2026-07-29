import type { NextConfig } from 'next';

// Served at the domain root (https://yatfu.github.io/) once the repo is
// renamed to yatfu.github.io — no basePath needed.
const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
