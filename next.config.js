/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(mp3|ogg)$/i,
      use: {
        loader: "url-loader",
      },
    });
    return config;
  },
};

module.exports = nextConfig;
