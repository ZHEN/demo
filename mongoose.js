var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/blog');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("success")
});
var blogschema = new mongoose.Schema({ 
    name: String, 
    id: Number,
    age: Number
});
let personInfo = mongoose.model('personInfo', blogschema,'personInfo');
info = personInfo.find({$age: {$get: 10}},function (err, docs) {
    console.log("success")
}) 
let mytest = new personInfo({
    "name": '测试1030',
    "age": 12,
    "id":7
})

mytest.save(function (err) {
    if (err) {
        console.log('保存失败',err)
    } else {
        console.log('保存成功')
    }
})
console.log(personInfo)
