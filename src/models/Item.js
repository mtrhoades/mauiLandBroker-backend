const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true,
        maxLength: [30, "Name cannot be more than 30 characters"]
    },
    file:{
        type: String,
        required: [true, "Please provide a file"]
    }
});

module.exports = mongoose.model("Item", itemSchema);