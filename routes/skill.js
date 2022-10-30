var express = require('express');
var router = express.Router();
 
router.get('/', function(req, res) {
res.render('skill', {goods: [
{title: '米格-31', price: '特价49元'},
{title: '米格-31', price: '特价49元'}
]})
})
 
module.exports = router;