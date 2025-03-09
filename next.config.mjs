/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  images: {
    localPatterns: [
      {
        pathname: "/public/**",
        search: "",
      },
    ],
  },
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
