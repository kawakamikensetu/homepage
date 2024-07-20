/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "kawakamikensetu.assets.newt.so",
        port: "",
      },
      // {
      //   protocol: "https",
      //   hostname: "storage.googleapis.com",
      //   port: "",
      // },
    ],
  },
};

export default nextConfig;
