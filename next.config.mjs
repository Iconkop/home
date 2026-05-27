/** @type {import('next').NextConfig} */
const repo = process.env.BASE_PATH || ''

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: repo,
  assetPrefix: repo,
}

export default nextConfig
