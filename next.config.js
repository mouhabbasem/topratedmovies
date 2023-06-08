/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/topratedmovies',
  output: 'export',
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
      '/movies/[id]': { page: '/movies/[id]' },
    };
  },
}

module.exports = nextConfig
