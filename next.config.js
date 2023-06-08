/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/topratedmovies',
  output: 'export',
  generateStaticParams: async () => {
    return [
      {
        route: '/',
      },
      {
        route: '/movies/[id]',
        params: {
          id: [/* list of movie IDs */],
        },
      },
    ];
  },
}

module.exports = nextConfig
