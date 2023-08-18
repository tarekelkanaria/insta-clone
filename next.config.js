/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/**/*",
        port: "",
      },
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        pathname: "/v0/b/**/**/*",
        port: "",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        pathname: "/wikipedia/commons/thumb/**/**",
        port: "",
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
        pathname: "/*",
        port: "",
      },
      {
        protocol: "https",
        hostname: "like4like.com",
        pathname: "/img/*",
        port: "",
      },
      {
        protocol: "https",
        hostname: "socodigital.com",
        pathname: "/wp-content/uploads/2021/03/*",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
