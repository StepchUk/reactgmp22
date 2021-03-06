const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    static: '.build',
    compress: true,
    port: 3000,
    historyApiFallback: true,
  },
});
