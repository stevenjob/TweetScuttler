const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: [                        // files to run at startup (points are where self-contained scripts go)
        'babel-polyfill',
        './src/main/assets/scripts/main.jsx',
        './src/main/assets/styles/main.scss',
        './src/main/assets/index.html',
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server'
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
                test: /\.jsx?$/,
                exclude: /node_modules/,
                include: path.resolve(__dirname, 'src/main/assets/scripts'),
                loaders: ['react-hot', 'babel']
            },
            {
                test: /\.html$/,
                include: path.resolve(__dirname, 'src/main/assets/'),
                loader: 'file-loader?name=[name].[ext]'
            },
            {
                test: /\.scss$/,
                include: path.resolve(__dirname, 'src'),
                loader: "style!css!autoprefixer!sass"
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    debug: true,
    devServer: {
        contentBase: "./src/main/assets/",
        port: 3000
    }
};
