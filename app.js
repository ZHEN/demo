var express = require('express'); // 引入express框架
var path = require('path'); // 引入path模块
var routes = require('./routes/app');// 引入路由模块
var port = 8000; // 设置端口号：3000
 
var app = express(); //实例化express
 
var serveStatic = require('serve-static'); // 静态文件处理
app.use(serveStatic('public')); // 路径：public
 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
 
app.listen(port); // 启动web服务。
 
var mongoose = require('mongoose'); // 加载mongoose模块
mongoose.connect('mongodb://localhost:27017/goods'); // 连接mongodb本地数据库imovie
console.log('MongoDB connection success!');

 
routes(app);
console.log('server listening at ' + port);
module.exports = app;