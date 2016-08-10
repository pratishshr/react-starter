/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/2/16.
 */

var webpack = require('webpack');

// Plugins
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // 'only' prevents reload on syntax errors
    __dirname + '/src/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    publicPath: '/dist',
    filename: 'bundle.js',
    chunkFilename: '[id].js'
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader')},
      {test: /\.js$/, exclude: /node_modules/, loaders: ['react-hot', 'babel-loader']},
      {test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/, loader: 'file-loader', query: {name: 'fonts/[name].[ext]'}},
    ]
  },
  devServer: {
    hot: true,
    historyApiFallback: true,
    inline: true,
    port: 8080
  },
  plugins: [
    new ExtractTextPlugin('bundle.css')
  ]
};
