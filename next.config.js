/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(mp3|ogg|mp4)$/i,
      use: {
        loader: "url-loader",
      },
    });
    return config;
  },
};

module.exports = nextConfig;
