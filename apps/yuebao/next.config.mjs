/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@repo/ui"],
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
