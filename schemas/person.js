var mongoose = require('mongoose');
 
var goodsSchemas = new mongoose.Schema({
kind: Number,
title: String,
price: String,
picUrl: String
})
 

goodsSchemas.statics = {
fetch: function (cb) {
return this
.find({})
.exec(cb)
},
findByKind: function (kind, cb) {
return this
.findOne({kind: kind})
.exec(cb)
}
}
 
// 导出 goodsSchemas 模式
module.exports = goodsSchemas;