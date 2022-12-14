/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  compiler: {
    styledComponents: true,
  },
  experimental: {
    fontLoaders: [{ loader: '@next/font/google', options: { display: 'swap' } }],
  },
};

// eslint-disable-next-line no-undef
module.exports = nextConfig;
