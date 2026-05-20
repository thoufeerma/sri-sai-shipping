import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    qualities: [75, 80, 85, 90],
  },
};

export default nextConfig;
