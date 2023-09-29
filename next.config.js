/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "daisyui.com",
      },
      {
        protocol: "https",
        hostname: "bpjcrlrrurqsbebmitqi.supabase.co",
      },
    ],
  },
};

module.exports = nextConfig;
