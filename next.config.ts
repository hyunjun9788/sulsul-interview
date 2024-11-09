// next.config.js

const withVideos = require('next-videos');

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config: any) => {
    config.module.rules.push({
      test: /\.(mov|mp4)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
          },
        },
      ],
    });
    return config;
  },
};

module.exports = withVideos(nextConfig);
