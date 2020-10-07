const mongoose = require('mongoose')
const listSchema = mongoose.Schema({
    title: {
        type: String,
        minlength: 1,
        required: true,
        trim: true
    },
    _userId:{
        type:mongoose.Types.ObjectId,
        required:true
    }
});
const List = mongoose.model('List', listSchema);
module.exports = List;