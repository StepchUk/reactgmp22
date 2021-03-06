const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  devtool: false,
  devServer: {
    static: '.build',
    compress: true,
    port: 3001,
    historyApiFallback: true,
    // open: true
  },
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
});
