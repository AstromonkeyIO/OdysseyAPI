var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema   = new Schema({
    //title: String,
    title: {type: String, index: { unique: true }},
    description: String,
    priority: String,
    workflow: String,
    boardId: String,
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    board: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Board'
    },
    assignee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }]
});

module.exports = mongoose.model('Task', TaskSchema);