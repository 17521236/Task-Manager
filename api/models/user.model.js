const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    email: {
        type: String,
        minlength: 1,
        required: true,
        trim: true
    },
    password: {
        type: String,
        minlength: 8,
        required: true
    }
});
const User = mongoose.model('User', userSchema);
module.exports = User;