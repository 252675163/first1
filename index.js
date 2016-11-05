/**
 * Created by Administrator on 2016/11/5.
 */
var express = require('express');
var path = require('path');
var app = express();
var indexRouter = require('./routes/index');
var userRouter = require('./routes/users');

app.set('views', path.join(__dirname, 'views'));// 设置存放模板文件的目录
app.set('view engine', 'ejs');// 设置模板引擎为 ejs

app.use('/',indexRouter);
app.use('/users', userRouter);
app.listen(3000);