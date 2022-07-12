/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },

  async redirects() {
    return [
      {
        source: "/",
        destination: "/auth/sign-in",
        permanent: true,
      },
    ];
  },
};
