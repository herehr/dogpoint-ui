/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // 🚀 Erzwingt, dass ESLint auf Vercel ignoriert wird
  },
}

module.exports = nextConfig

