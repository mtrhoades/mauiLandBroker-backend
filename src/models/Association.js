const mongoose = require('mongoose');

const associationSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    directory: {
        type: String,
    },
    username: {
        type: String,
    },
    password: {
        type: String,
    },
    filecategories: [
        {categoryname: {type: String}, files: [
            {filename: {type: String}, size: {type: String}, filepath: {type: String}}
        ]}
    ]
});

module.exports = mongoose.model("Association", associationSchema);