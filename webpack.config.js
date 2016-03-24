path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: './dist/bundle.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: './bundle.min.js',
    publicPath: '/static/',
  },
  plugins : [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({minimize: true}) 
  ]
};