/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/flowpilot",
  assetPrefix: "/flowpilot",
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
