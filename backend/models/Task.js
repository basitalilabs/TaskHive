const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title : {
        type: String,
        required: true
    },
    description : {
        type: String
    },
    status : {
        type: String,
        enum : ['pending', 'complete'],
        default : 'pending'
    },
    dueDate : {
        type : Date,
        default : null
    },
    priority : {
        type : String,
        enum : ['low', 'medium', 'high'],
        default : 'medium'
    },
    userId : {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true
    }
},{ timestamps: true });

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;