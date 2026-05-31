/** @type {import('next').NextConfig} */
const basePath = '/bulsajo-record'

const nextConfig = {
  output: 'export',
  basePath,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  images: { unoptimized: true },
}

export default nextConfig
