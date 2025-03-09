/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // basePath: "/classic",
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
