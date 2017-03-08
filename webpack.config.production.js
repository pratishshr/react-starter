const webpack = require('webpack');
const resolve = require('path').resolve;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './index.js', // the entry point of our app
  output: {
    publicPath: '',
    chunkFilename: '[id].js',
    path: resolve(__dirname, 'dist'),
    filename: 'js/bundle.[chunkhash].js' // the output bundle
  },
  context: resolve(__dirname, 'src'),
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: 'file-loader?name=[name].[ext]&publicPath=images/&outputPath=/images/'
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        use: 'file-loader?name=[name].[ext]&publicPath=fonts/&outputPath=/fonts/'
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader', 'sass-loader'] })
      }
    ]
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    new ExtractTextPlugin('css/bundle.css'),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'public/index.html')
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin({ beautify: false, comments: false, sourceMap: true })
  ]
};
