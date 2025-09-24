// next.config.js
import type { NextConfig } from "next";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true, // skip ESLint errors during build
  },
  typescript: {
    ignoreBuildErrors: true, // skip TS errors during build
  },
};

// Bundle analyzer
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

// Compose all configs
module.exports = withBundleAnalyzer(withFlowbiteReact(nextConfig));
