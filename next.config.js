const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["@napi-rs/canvas"],
    assetPrefix: isProd ? 'https://p-moonlight.zeabur.app' : undefined,
  }
};

module.exports = nextConfig;
