/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  experimental: {
    runtime: "experimental-edge",
    appDir: true,
  },
}

module.exports = nextConfig
