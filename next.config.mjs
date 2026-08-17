/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
    loader: 'custom',
    loaderFile: './src/lib/imageLoader.js',
    domains: ['pub-xxxxxxxxxxxxxxxx.r2.dev'],
  },
};

export default nextConfig;
