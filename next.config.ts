import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    cssChunking: 'loose',
    reactCompiler: true
  },
  compiler: {
    removeConsole: {
      exclude: ['error']
    }
  },
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**'
      }
    ]
  }
};

export default nextConfig;
