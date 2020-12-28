const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './dist',
    publicPath: '/',
    hot: true,
    port: 5001,
    historyApiFallback: true,
  },
  resolve: {
    alias: {
      Config: path.resolve(__dirname, 'configs/config.local'),
    },
  },
});
