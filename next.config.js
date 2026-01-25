/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
  // Improve performance
  poweredByHeader: false,
  reactStrictMode: true,
}

module.exports = nextConfig
