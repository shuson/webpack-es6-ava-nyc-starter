require('shelljs/global');

var ora = require('ora');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');

var spinner = ora('building to dist/...');

spinner.start();

rm('-rf', 'dist');
mkdir('dist');

webpack(webpackConfig, function (err, stats) {
    spinner.stop();
    if (err) throw err;

    process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
    }) + '\n')
})
