/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-inline' 'unsafe-eval' https://namiru.ai https://evident-gibbon-87.clerk.accounts.dev;
              connect-src 'self' https://namiru.ai https://evident-gibbon-87.clerk.accounts.dev;
              img-src 'self' data: https://img.clerk.com https://namiru.ai;
              style-src 'self' 'unsafe-inline';
              frame-src 'self' https://namiru.ai;
            `.replace(/\s{2,}/g, ' ').trim(),
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
    ],
  },
};

export default nextConfig;
