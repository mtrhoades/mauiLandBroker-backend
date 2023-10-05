const mongoose = require('mongoose');

const associationSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: true
    },
    directory: {
        type: String,
        // required: true,
    },
    username: {
        type: String,
        // required: true,
        // immutable: true
    },
    password: {
        type: String,
        // required: true,
        // immutable: true
    }
});

module.exports = mongoose.model("Association", associationSchema);