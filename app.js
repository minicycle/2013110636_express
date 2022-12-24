var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var comRouter = require('./routes/company');
const shopRouter = require('./routes/shop');
const staffRouter = require('./routes/staff');


var app = express();
mongoose.connect('mongodb+srv://superdev:za017261976@2013110636-ikkyu.nkd4x6h.mongodb.net/restfulapi?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology: true ,useFindAndModify: false})

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/company', comRouter);
app.use('/staff',staffRouter);
app.use('/shop',shopRouter);


module.exports = app;
