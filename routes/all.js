var express = require('express');
var router = express.Router();
var goods = require('../models/person.js'); // 载入mongoose编译后的模型movie
 
router.get('/', function(req, res) {
// 查询数据库中所有商品数据
goods.fetch(function(err, goods) {
if (err) {
console.log(err);
}
res.render('all',{
goods: goods
})
})
})
 
module.exports = router;