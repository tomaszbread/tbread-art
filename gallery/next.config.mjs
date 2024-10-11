/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    deviceSizes: [320, 420, 768, 1024, 1200],
    loader: "default",
    domains: ["res.cloudinary.com"],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://tbread-art.onrender.com/api/:path*',
      },
    ];
  },
};

export default nextConfig;
