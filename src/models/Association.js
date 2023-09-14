const mongoose = require('mongoose');

const associationSchema = new mongoose.Schema({
    name: String
});

module.exports = mongoose.model("Association", associationSchema);