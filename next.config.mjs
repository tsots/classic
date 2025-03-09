/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  // basePath: "/classic",
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? "/classic/" : "",
  basePath: isProd ? "/classic" : "",
  output: "export",
};

export default nextConfig;
