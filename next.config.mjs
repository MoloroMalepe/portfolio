/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.google.com",
        port: "",
        pathname: "/url/**", // Adjust the pathname if needed to be more specific
      },
    ],
  },
};

export default nextConfig;
