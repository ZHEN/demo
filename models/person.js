var mongoose = require('mongoose');
var movieSchema = require('../schemas/person.js'); 
var person = mongoose.model('person', movieSchema);
module.exports = person;