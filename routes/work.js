var express = require('express');
var router = express.Router();
 
router.get('/', function(req, res) {
res.render('work', {goods: [

]})
})
 
module.exports = router;