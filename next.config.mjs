/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/eportfolio",
  assetPrefix: "/eportfolio",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

module.exports = nextConfig;
