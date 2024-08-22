/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({ test: /.svg$/, use: ["@svgr/webpack"] });
    return config;
  },
  images: {
    domains: [
      "669019a824005d1e41dfcccb--deft-youtiao-93eb07.netlify.app",
      "p2pclouds.org",
      "images.unsplash.com",
    ],
  },
};

export default nextConfig;
