var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [                        // files to run at startup (points are where self-contained scripts go)
        'babel-polyfill',
        './src/main/assets/js/main.js',
        'webpack-dev-server/client?http://localhost:80'
    ],
    output: {                       // where to serve compiled files from
        publicPath: '/js/',
        path: 'public/js/',
        filename: 'main.js'
    },
    devtool: 'source-map',          // serve the source
    module: {
        loaders: [                  // list of loaders (where you put things which transform your code)
            {
                test: /\.js$/,
                include: path.join(__dirname, 'src/assets/js'),
                loader: 'babel-loader',
                query: {
                    presets: ["es2015"]
                }
            }
        ]
    },
    debug: true,
    devServer: {
        contentBase: "./src",
        port: 80
    }
};
