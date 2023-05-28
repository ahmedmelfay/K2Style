/** @type {import('next').NextConfig} */
const nextConfig = {
  // swcMinify: true,
  reactStrictMode: false,
  transpilePackages: ['countup.js', 'react-countup'],
  i18n: {
    locales: ['en', 'ar', 'fr'],
    defaultLocale: 'ar'
  }
};

module.exports = nextConfig;
