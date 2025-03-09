/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  output: "export",
  basePath: isProd ? "/classic" : "",

  // reactStrictMode: true,
  // images: {
  //   unoptimized: true, // Disable default image optimization
  // },
  // trailingSlash: true,
  // skipTrailingSlashRedirect: true,
};

export default nextConfig;
