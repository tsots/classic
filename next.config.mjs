/** @type {import('next').NextConfig} */
const nextConfig = {
  // basePath: "/classic",
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  trailingSlash: true,
  output: "export",
};

export default nextConfig;
