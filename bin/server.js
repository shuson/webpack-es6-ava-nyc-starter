var WebpackDevServer = require("webpack-dev-server");
var webpack = require("webpack");

var config = require("./webpack.config.js");

config.entry.app.unshift("webpack-dev-server/client?http://localhost:9010/", "webpack/hot/dev-server");

var compiler = webpack(config);
var server = new WebpackDevServer(compiler, {
    contentBase: "./",
    hot: true,
    historyApiFallback: false,
    compress: true,
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    },
    // It's a required option.
    publicPath: "/dist/",
    headers: {
        "X-Custom-Header": "yes"
    },
    stats: {
        colors: true
    }
});
server.listen(9010);