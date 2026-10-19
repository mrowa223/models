import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // В домашней папке лежит чужой lockfile — фиксируем корень проекта явно
  outputFileTracingRoot: path.join(__dirname),
  // ESLint в проекте не настроен
  eslint: { ignoreDuringBuilds: true },
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
