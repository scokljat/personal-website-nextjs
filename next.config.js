/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com"],
  },
  experimental: {
    newNextLinkBehavior: false,
  },
};

module.exports = nextConfig;
