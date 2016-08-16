var express = require('express');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');

const bodyParser = require('body-parser');
const morgan = require('morgan');
const passport = require('passport');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
 
var compiler = webpack(webpackConfig);

// var utils = require('./server/utils.js');
// var compare = utils.comparePassword;


 
app.use(express.static(__dirname + '/www'));

// boilerplate from webpacDevMiddleware repo 
// app.use(webpackDevMiddleware(compiler, {
//   hot: true,
//   filename: 'bundle.js',
//   publicPath: '/',
//   stats: {
//     colors: true,
//   },
//   historyApiFallback: true,
// }));

//////////////////////////////////////
//  DB
//////////////////////////////////////

// var Sequelize = require('sequelize')
//   , sequelize = new Sequelize('sherpatest', 'root', '', {
//       dialect: "mysql", 
//       port:    3306, 
//     });

// var User = sequelize.define('user', {
//   name: Sequelize.STRING,
//   email: Sequelize.STRING,
//   password: Sequelize.STRING
// });

// sequelize.sync().then(function() {
//   return User.create({
//     name: 'jane doe',
//     email: 'jane@jane.com',
//     password: 'testpass'
//   });
// }).then(function(jane) {
//   console.log(jane.get({
//     plain: true
//   }));
// });

//////////////////////////////////////
//  Routes
//////////////////////////////////////



// app.post('/api/signup', function (req, res) {
// 	console.log('REQ', req.body)
//   return utils.hashPassword(req.body.password)
// 		.then(hashedPassword => {
// 			req.body.password = hashedPassword;
// 			return User.create(req.body);
// 		})
// 		.catch(err => {
// 			res.status(401).send({message: 'this username has already been taken'});
// 		});
// });

// app.post('/api/login', function (req, res) {
//   var currentUser;
// 	User.findOne({ where: { email: req.body.email }})
//     .then(user => {
// 			if (!user) { throw new Error('No account associated with this email address'); }
// 			currentUser = user;
//       return compare(req.body.password, user.password)
//     })
// 		.then(match => {
// 			if (!match) { throw new Error('Wrong password'); }
// 			res.json({
// 				user: {
// 					id: currentUser.id,
// 					email: currentUser.email
// 				}
// 			});
// 		})
// 		.catch(err => {
// 			console.error(err);
// 			res.status(401).send({message: err.message});
// 		});
// });

 
var server = app.listen(4000, function() {
  var port = server.address().port;
  console.log('Example app listening at port: ', port);
});