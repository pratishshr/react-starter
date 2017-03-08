const webpack = require('webpack');
const resolve = require('path').resolve;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8181', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // 'only' prevents reload on syntax errors
    './index.js'// the entry point of our app
  ],
  output: {
    publicPath: '/',
    filename: 'js/bundle.js', // the output bundle
    chunkFilename: '[id].js',
    path: resolve(__dirname, 'dist')
  },
  context: resolve(__dirname, 'src'),
  devtool: 'inline-source-map',
  devServer: {
    port: 8181,
    hot: true, // enable HMR on the server
    publicPath: '/', // match the output 'publicPath'
    historyApiFallback: true, // respond to 404s with index.html
    contentBase: resolve(__dirname, 'dist') // match the output path
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['react-hot-loader', 'babel-loader']
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: 'file-loader?name=[name].[ext]&publicPath=/images/&outputPath=/images/'
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        use: 'file-loader?name=[name].[ext]&publicPath=/fonts/&outputPath=/fonts/'
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader', 'sass-loader'] })
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'public/index.html')
    }),
    new ExtractTextPlugin('css/bundle.css'),
    new webpack.NamedModulesPlugin(), // prints more readable module names in the browser console on HMR updates
    new webpack.NoEmitOnErrorsPlugin(), // do not emit compiled assets that include errors
    new webpack.HotModuleReplacementPlugin() // enable HMR globally
  ]
};
