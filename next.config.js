/** @type {import('next').NextConfig} */
const nextConfig = {
/*
  webpack: (config, { isServer, buildId, dev, webpack }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        stream: require.resolve('stream-browserify'),
        crypto: require.resolve('crypto'),
      };

      config.plugins.push(
          new webpack.ProvidePlugin({
            process: 'process/browser',
          }),
          new webpack.NormalModuleReplacementPlugin(
              /node:crypto/,
              (resource) => {
                resource.request = resource.request.replace(/^node:/, '');
              }
          )
      );
    }
    return config;
  },
 */
}

module.exports = nextConfig
