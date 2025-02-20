/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // 🚀 Deaktiviert ESLint während des Builds auf Vercel
  },
}

module.exports = nextConfig

