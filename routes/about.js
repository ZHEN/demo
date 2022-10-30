var express = require('express');
var router = express.Router();
 
router.get('/', function(req, res) {
res.render('about', {goods: [
{url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2035613461,1411584253&fm=26&gp=0.jpg', title: '短裤女', price: '49元'},
{url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2035613461,1411584253&fm=26&gp=0.jpg', title: '短裤女', price: '49元'},
{url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2035613461,1411584253&fm=26&gp=0.jpg', title: '短裤女', price: '49元'},
{url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2035613461,1411584253&fm=26&gp=0.jpg', title: '短裤女', price: '49元'},
]})
})
 
module.exports = router;