var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mysql = require("mysql");
var bodyParser = require('body-parser');


var indexRouter = require('./routes/index');
var RegisterusersRouter = require('./routes/RegisterUser');
var loginRouter = require('./routes/Login');
var logoutRouter = require('./routes/Logout');
var UpdateUserDetailsRouter = require('./routes/UpdateUserDetails');
var SendFriendRequestRouter = require('./routes/SendFriendRequest');
var RespondToFriendRequestRouter = require('./routes/RespondToFriendRequest');
var AddPostRouter = require('./routes/AddPost');
var UpdatePostRouter = require('./routes/UpdatePost');
var FetchUserFeedRouter = require('./routes/FetchUserFeed');
var FetchFriendListRouter = require('./routes/FetchFriendList');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/RegisterUser', RegisterusersRouter);
app.use('/Login', loginRouter);
app.use('/Logout', logoutRouter);
app.use('/UpdateUserDetails',UpdateUserDetailsRouter);
app.use('/SendFriendRequest',SendFriendRequestRouter);
app.use('/RespondToFriendRequest',RespondToFriendRequestRouter);
app.use('/AddPost',AddPostRouter);
app.use('/UpdatePost',UpdatePostRouter);
app.use('/FetchUserFeed',FetchUserFeedRouter);
app.use('/FetchFriendList',FetchFriendListRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
