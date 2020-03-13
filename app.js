const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const registerRouter=require('./routes/register');
const findIdRouter=require('./routes/findId');
const findPwRouter=require('./routes/findPw');
const scrapRouter=require('./routes/scrap');
const appRouter=require('./routes/application');
const indivRegister=require('./routes/IndivRegister');
const enterRegister=require('./routes/EnterRegister');
const indivlog=require('./routes/IndivLogin');
const enterlog=require('./routes/EnterLogin');
const job_openingRouter=require('./routes/job_opening');

require('./db');

const app = express();

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
app.use('/process/indiv',indivRegister);
app.use('/process/enter',enterRegister);
app.use('/process/indivlog',indivlog);
app.use('/process/enterlog',enterlog);
app.use('/job_opening',job_openingRouter);

module.exports = app;
