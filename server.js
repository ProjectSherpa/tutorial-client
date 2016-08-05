var express = require('express');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
var app = express();
 
var compiler = webpack(webpackConfig);
 
app.use(express.static(__dirname + '/www'));

// boilerplate from webpacDevMiddleware repo 
app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));
 
var server = app.listen(3000, function() {
  var port = server.address().port;
  console.log('Example app listening at port: ', port);
});