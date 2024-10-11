/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    deviceSizes: [320, 420, 768, 1024, 1200],
    loader: "default",
    domains: ["res.cloudinary.com"],
  },
  serverRuntimeConfig: {
    port: process.env.PORT || 3000,
  }
};

export default nextConfig;