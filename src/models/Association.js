const mongoose = require('mongoose');

const associationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Association", associationSchema);