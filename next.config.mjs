/** @type {import('next').NextConfig} */
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' 'unsafe-eval' blob: https://namiru.ai https://*.clerk.accounts.dev;
  connect-src 'self' https://namiru.ai https://api.namiru.ai https://*.clerk.accounts.dev https://clerk-telemetry.com;
  worker-src 'self' blob:;
  img-src 'self' data: blob: https://img.clerk.com;
  style-src 'self' 'unsafe-inline';
`;

const nextConfig = {
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

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: ContentSecurityPolicy.replace(/\n/g, ""),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
