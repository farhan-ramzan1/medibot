/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://namiru.ai https://img.clerk.com;",
          },
        ],
      },
    ];
  },
  experimental: {
    serverComponentsHmrCache: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.clerk.com",
      },
      // If the chatbot uses images from its own domain, add it here too
      {
        protocol: "https",
        hostname: "namiru.ai",
      },
    ],
  },
};

export default nextConfig;
