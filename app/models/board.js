var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BoardSchema   = new Schema({
    title: {type: String, index: {unique: true}},
    description: String,
    userId: String
});

module.exports = mongoose.model('Board', BoardSchema);