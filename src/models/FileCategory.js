const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        // required: true
    },
    numberoffiles: {
        type: Number,
                // required: true
    }
});

module.exports = mongoose.model("FileCategory", categorySchema);