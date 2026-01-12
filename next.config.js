/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/illustration',
        destination: '/work',
        permanent: true,
      },
      {
        source: '/books-for-adults',
        destination: '/work/gizmo',
        permanent: true,
      },
      {
        source: '/books-for-children',
        destination: '/work',
        permanent: true,
      },
      {
        source: '/emergency-vehicles',
        destination: '/work/emergency-vehicles',
        permanent: true,
      },
      {
        source: '/adventures-in-space',
        destination: '/work/adventures-in-space',
        permanent: true,
      },
      {
        source: '/adventures-on-earth',
        destination: '/work/adventures-on-earth',
        permanent: true,
      },
      {
        source: '/worlds-most-magnificent-machines',
        destination: '/work/magnificent-machines',
        permanent: true,
      },
      {
        source: '/pages/representation',
        destination: '/contact',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
