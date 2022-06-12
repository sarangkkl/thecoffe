module.exports = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["cdn.sanity.io"],
  },
  async redirects() {
    return [
      {
        source: "/admin",
        destination: "https://admin-dashboard-thelocalfeet.sanity.studio/",
        permanent: true,
      },
    ];
  },
};
