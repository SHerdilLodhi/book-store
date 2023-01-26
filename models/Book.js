const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//25 21
const bookSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    available: {
        type: Boolean,
     },
     image: {
         type: String,
         required: true
     }
});

module.exports = mongoose.model("Book", bookSchema);