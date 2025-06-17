/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3001',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'loremflickr.com',
        pathname: '/**',
      }
    ],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:3001/:path*',
      },
    ];
  },
  // Desabilita o cache em desenvolvimento
  onDemandEntries: {
    // período (em ms) onde o servidor manterá as páginas em memória
    maxInactiveAge: 0,
    // número de páginas que devem ser mantidas em memória
    pagesBufferLength: 0,
  },
};

module.exports = nextConfig; 