const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
    association: {
        type: String
    },
    filename: {
        type: String,
        // required: true
    },
    filecategory: {
        type: String,
        // required: true,
    }
});

module.exports = mongoose.model("File", fileSchema);