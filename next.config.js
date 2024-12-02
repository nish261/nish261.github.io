/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  // Since this is a user/organization page (username.github.io),
  // we don't need basePath or assetPrefix
  basePath: '',
  assetPrefix: '',
};

module.exports = nextConfig;