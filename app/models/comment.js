var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentSchema   = new Schema({
    comment: String,
    date: { type: Date, default: Date.now },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    task: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task'
    }
});

module.exports = mongoose.model('Comment', CommentSchema);