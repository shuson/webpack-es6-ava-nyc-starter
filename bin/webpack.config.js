var path = require('path')
var webpack = require('webpack')

module.exports = {
    entry: {
        app: ['./src/index.js']
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js',
        library: 'Starter',
        libraryTarget: 'umd'
    },
    externals: {
    },
    module: {
        preLoaders: [],
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /(node_modules|bin)/
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devtool: 'source-map'
}
