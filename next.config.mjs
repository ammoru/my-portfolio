/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export", // Enables static export
    
    images: {
        unoptimized: true,
    },
    // basePath: "/my-portfolio", // Replace with your actual GitHub repo name
    // assetPrefix: "/my-portfolio/", // Ensures assets load correctly
    trailingSlash: true, // Helps with subpage navigation
    eslint: {
        ignoreDuringBuilds: true,
    },
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.resolve.fallback.fs = false; // Fixes issues with certain npm packages
        }
        return config;
    },
};

export default nextConfig;