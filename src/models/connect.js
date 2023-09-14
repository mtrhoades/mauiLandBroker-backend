const mongoose = require('mongoose'); // communicate with mongodb
mongoose.set("strictQuery", false);

const connectDB = (url) => {
    return mongoose.connect(url, {}, console.log("Connected to mongoDB Atlas!"))
};

module.exports = connectDB;
