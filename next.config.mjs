/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.giphy.com",
      },
    ],
  },
  reactStrictMode: false,
};

export default nextConfig;
