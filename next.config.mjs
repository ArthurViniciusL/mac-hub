/* @arthur.vsl */

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|swf|avi|mov|mkv)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/videos/',
          outputPath: 'static/videos/',
          name: '[name].[hash].[ext]',
        },
      },
    });

    config.module.rules.push({
      test: /\.(mp3|wav|m4a)$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/media/[hash][ext][query]'
      }
    });

   // config.module.rules.push({
   //   test: /\.svg$/,
   //   use: ['@svgr/webpack'], // Usa o @svgr/webpack para transformar SVGs em componentes React
  //  });

    return config;
  },
};

export default nextConfig;
