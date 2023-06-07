/** @type {import('next').NextConfig} */
const nextConfig = {
  // swcMinify: true,
  reactStrictMode: false,
  transpilePackages: ['countup.js', 'react-countup'],
  i18n: {
    locales: ['ar', 'en', 'fr'],
    defaultLocale: 'en',
    localeDetection: false
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.youtube.com',
        port: '',
        // pathname: '/my-bucket/**'
      },
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
        port: '',
      }
    ]
  }
};

module.exports = nextConfig;
