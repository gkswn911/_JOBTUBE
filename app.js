var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var registerRouter=require('./routes/register');
var findIdRouter=require('./routes/findId');
var findPwRouter=require('./routes/findPw');
var scrapRouter=require('./routes/scrap');
var appRouter=require('./routes/application');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug'); // views에 있는 파일들이 pug 템플릿으로 작성될 것이라고 선언.

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/register',registerRouter);
app.use('/findId',findIdRouter);
app.use('/findPw',findPwRouter);
app.use('/scrap',scrapRouter);
app.use('/application',appRouter);

module.exports = app;
