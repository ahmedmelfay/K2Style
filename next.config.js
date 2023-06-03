/** @type {import('next').NextConfig} */
const nextConfig = {
  // swcMinify: true,
  reactStrictMode: false,
  transpilePackages: ['countup.js', 'react-countup'],
  i18n: {
    locales: ['ar', 'en', 'fr'],
    defaultLocale: 'ar',
    localeDetection: false
  }
};

module.exports = nextConfig;
