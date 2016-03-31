var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WorkflowSchema   = new Schema({
    
    title: String,
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    board: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Board'
    },
    tasks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task'
    }]
});

module.exports = mongoose.model('Workflow', TaskSchema);