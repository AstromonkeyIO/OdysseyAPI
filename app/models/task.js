var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema   = new Schema({

    title: String,
    description: String,
    priority: String,
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    board: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Board'
    },
    workflow: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Workflow'
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