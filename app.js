require('dotenv').config()
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var https = require("https");
var favicon = require('serve-favicon')
var path = require('path')

var index = require('./routes/index');
var projects = require('./routes/projects');

var app = express();
var router = express.Router()

var host = process.env.HOST

// Add Favicon
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

setInterval(function() {
  https.get(host);
}, 300000);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/project', projects);


// Validate Users
router.get('/gateway', function (req, res, next) {
  res.render('password_protect', {});
});

router.post('/gateway', function (req, res, next) {
  var password = req.param('password');

  if (password.toLowerCase() !== 'ad2020') {
    res.redirect('/');
  }
  res.cookie('authenticated', 'true', );
  res.redirect('/');
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
