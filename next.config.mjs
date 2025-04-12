/** @type {import('next').NextConfig} */
const nextConfig = {
   output: "standalone",
    webpack(config) {
      config.module.rules.push({
        test: /\.(mp4|webm|ogg|mov)$/,
        type: 'asset/resource',
      });
  
      return config;
    },
  };

export default nextConfig;
