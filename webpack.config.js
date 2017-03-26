var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: "./src/client/main/index.ts",
    output: {
        path: './dist',
        filename: "js/bundle.js"
    },
    resolve: {
        extensions: ['', '.ts', '.js', '.json', '.css', '.scss', '.html']
    },
    module: {
        loaders: [{
            test: /\.ts/,
            loaders: ['ts-loader'],
            exclude: /node_modules/
        }, {
            test: /\.scss$/,
            exclude: /node_modules/,
            loader: ExtractTextPlugin.extract('css!sass')
        }, {
            test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url?limit=10000&mimetype=application/font-woff"
        }, {
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url?limit=10000&mimetype=application/octet-stream"
        }, {
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            loader: "file"
        }, {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url?limit=10000&mimetype=image/svg+xml"
        }],
        exprContextCritical: false
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        // new webpack.optimize.UglifyJsPlugin({
        //     sourceMap: true,
        //     mangle: {
        //         keep_fnames: true
        //     }
        // }),
        new ExtractTextPlugin('css/[name].css'),
        new CopyWebpackPlugin([{
            from: './src/client/images',
            to: 'images'
        }, {
            context: './src/client/main/',
            from: '**/*.html',
            to: 'partials/'
        }, {
            from: './src/client/libs/',
            to: 'libs'
        }])
    ]
};
