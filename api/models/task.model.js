const mongoose = require('mongoose')
const taskSchema = mongoose.Schema({
    title: {
        type: String,
        minlength: 1,
        required: true,
        trim: true
    },
    _listId: {
        type: mongoose.Types.ObjectId,
        required: true
    }
});
const Task = mongoose.model('Task', taskSchema);
module.exports = Task;