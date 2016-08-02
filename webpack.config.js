/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/2/16.
 */

var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    __dirname + "/src/index.js"
    ],
  output: {
    path: __dirname + '/dist',
    publicPath: '/dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: "style!css"},
      {test: /\.js$/, exclude: /node_modules/, loaders: ["react-hot", "babel-loader"]}
    ]
  },
  devServer: {
    hot: true,
    historyApiFallback: true,
    inline: true,
    port: 8080
  }
};