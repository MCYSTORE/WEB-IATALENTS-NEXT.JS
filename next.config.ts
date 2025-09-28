import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    ppr: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
      {
        protocol: 'https',
        hostname: 'talent.com',
      }
    ],
  },
}

export default nextConfig
