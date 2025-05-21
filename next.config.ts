import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "framerusercontent.com",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
