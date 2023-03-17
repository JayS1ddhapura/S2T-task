const mongoose = require('mongoose')

// defining user schema
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
    },
    phoneNumber: {
        type: String,
        trim: true,
    },
    countryCode: {
        type: String,
    }
})

// creating user model
const User = mongoose.model('User', UserSchema);

module.exports = User;
