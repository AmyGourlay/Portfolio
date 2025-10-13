import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    basePath: '',
    typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
}

export default nextConfig
