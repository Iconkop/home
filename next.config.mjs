/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',       // 静态导出，生成 out/ 文件夹
  images: {
    unoptimized: true,    // 静态导出需要禁用图片优化
  },
}

export default nextConfig
