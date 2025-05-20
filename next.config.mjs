/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/eportfolio",
  assetPrefix: "/eportfolio/",
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
