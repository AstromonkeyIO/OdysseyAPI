var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema   = new Schema({
    username: {type: String, index: {unique: true}},
    password: String,
    role: String
});

module.exports = mongoose.model('User', UserSchema);