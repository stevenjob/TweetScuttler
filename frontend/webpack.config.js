const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [                        // files to run at startup (points are where self-contained scripts go)
    'babel-polyfill',
    './src/main.jsx',
    './assets/styles/main.scss',
    './assets/index.html',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server'
  ],
  output: {                       // where to serve compiled files from
    publicPath: '/',
    path: 'dist',
    filename: 'main.js'
  },
  devtool: 'source-map',          // serve the source
  module: {
    loaders: [                  // list of loaders (where you put things which transform your code)
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src/'),
        loaders: ['react-hot', 'babel']
      },
      {
        test: /\.html$/,
        include: path.resolve(__dirname, 'assets/'),
        loader: 'file-loader?name=[name].[ext]'
      },
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, 'assets/styles/'),
        loader: "style!css!autoprefixer!sass"
      },
      {
        test: /\.(png|jpg|jpeg|gif|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=8192'
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  debug: true,
  devServer: {
    contentBase: "./",
    port: 3000
  }
};
