const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

const withBasePath = (path: string): string => {
    if (!basePath) {
        return path
    }

    return path.startsWith('/') ? `${basePath}${path}` : `${basePath}/${path}`
}

export { basePath, withBasePath }
