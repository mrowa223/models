import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // В домашней папке лежит чужой lockfile — фиксируем корень проекта явно
  outputFileTracingRoot: path.join(__dirname),
  // ESLint в проекте не настроен
  eslint: { ignoreDuringBuilds: true },
  images: {
    // Фото уже сжаты в WebP по 25–30 КБ — отдаём как есть, без задержки оптимизатора
    unoptimized: true,
  },
};

export default nextConfig;
