const { readFileSync } = require("fs");
const path = require("path");

const isProd = process.env.NODE_ENV === "production";

const withPWA = require("next-pwa")({
  dest: "public",
  disable: !isProd,
});

const MY_CLIPPINGS = readFileSync(
  path.join(__dirname, "/public/My Clippings.txt"),
  "utf-8"
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    MY_CLIPPINGS,
  },
  experimental: {
    serverComponentsExternalPackages: ["@napi-rs/canvas"],
  },
};

module.exports = withPWA(nextConfig);
