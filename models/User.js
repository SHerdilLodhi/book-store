const mongoose = require('mongoose');

const user = new mongoose.Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    email: {
        type: String
    },
    roll: {
        type: String,
        default : "user"
    },
    
})

module.exports = mongoose.model("User", user)
