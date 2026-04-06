import type { NextConfig } from 'next'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

const nextConfig: NextConfig = {
    typescript: {
        ignoreBuildErrors: true,
    },
    output: 'export',
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
    basePath: basePath || undefined,
    assetPrefix: basePath || undefined,
    cacheComponents: false,
    reactCompiler: true,
    allowedDevOrigins: ['127.0.0.1', 'localhost'],
}

export default nextConfig
