var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: [                        // files to run at startup (points are where self-contained scripts go)
        'babel-polyfill',
        './src/main/assets/js/main.js',
        './src/main/assets/styles/main.scss',
        './src/main/assets/index.html',
        'webpack-dev-server/client?http://localhost:80'
    ],
    output: {                       // where to serve compiled files from
        publicPath: '/',
        path: 'public',
        filename: 'main.js'
    },
    devtool: 'source-map',          // serve the source
    module: {
        loaders: [                  // list of loaders (where you put things which transform your code)
            {
                test: /\.js$/,
                exclude: /node_modules/,
                include: path.resolve(__dirname, 'src/main/assets/js'),
                loader: 'babel',
                query: {
                    presets: ["es2015"]
                }
            },
            {
                test: /\.html$/,
                include: path.resolve(__dirname, 'src/main/assets/'),
                loader: 'file-loader?name=[name].[ext]'
            },
            {
                test: /\.scss$/,
                include: path.resolve(__dirname, 'src'),
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader!sass-loader")
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("style.css", {allChunks: false})
    ],
    debug: true,
    devServer: {
        contentBase: "./src/main/assets/",
        port: 80
    }
};
