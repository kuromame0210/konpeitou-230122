/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
    }
  },
  images: {
    loader: 'cloudinary', // Cloudinaryを使う場合
    path: 'https://res.cloudinary.com/myaccount/', // CloudinaryのURLベース
    domains: ['localhost:3000'],
  },
}

module.exports = nextConfig


