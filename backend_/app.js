const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const app = express();
const settings={
	connectURI:process.env.DB ||"sin",
	secretJWT:process.env.SECRET_JWT ||"sin",
	timeJWT:process.env.TIME_JWT || "sin",
	domain: process.env.DOMAIN || "localhost"
}
const model = require('./models/model.js')(settings);
const apiUSer = require('./routes/apiUser')(model);
const apiBook =require('./routes/apiBooks')(model)

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});


/* let allowCrossDomain = function(req, res, next) {
	res.header('Access-Control-Allow-Origin', "*");
	res.header('Access-Control-Allow-Headers', "*");
	next();
  }
  app.use(allowCrossDomain); */

app.use('/apiUser', apiUSer);
app.use('/apiBook',apiBook)
//require('./migrador')(model);

// error handler
app.use(function(err, req, res, next) {
  const message = err.message|| err;
  res.status(err.status || 500).json({"error":message})
});

module.exports = app;
