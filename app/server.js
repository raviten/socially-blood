var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.dev');

console.log("NODE_ENV:", process.env.NODE_ENV)


new WebpackDevServer(webpack(config), {
  hot: true,
  historyApiFallback: true,
  disableHostCheck: true,
  quiet: true,
  compress: true
}).listen(3200, '0.0.0.0', function (err, result) {
    return console.error(err)

  console.log('🌎 Listening at http://0.0.0.0:3200/');
});
