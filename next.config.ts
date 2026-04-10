import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL("https://ischool.gccis.rit.edu/api/assets/img/people/***")
    ]
  }
};

export default nextConfig;
