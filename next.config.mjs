/** @type {import('next').NextConfig} */
const nextConfig = {
    
    trailingSlash: true, // Helps with subpage navigation
    eslint: {
        ignoreDuringBuilds: true,
    },
   // Enables the new SWC compiler for faster builds and smaller output
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.resolve.fallback.fs = false; // Fixes issues with certain npm packages
        }
        return config;
    },
};

export default nextConfig;