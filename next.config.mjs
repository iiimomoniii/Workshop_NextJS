/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["imgupscaler.com"],
        minimumCacheTTL:0
    }
};

export default nextConfig;
