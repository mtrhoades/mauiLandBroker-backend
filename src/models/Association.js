const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

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

// bcrypt hashing middleware
associationSchema.pre('save', function(next) {
    const association = this;

    if (!association.isModified('password')) {
        return next();
    }

    bcrypt.genSalt(10, (saltError, salt) => {
        if (saltError) {
            return next(saltError);
        }
        bcrypt.hash(association.password, salt, (hashError, hash) => {
            if (hashError) {
                return next(hashError);
            }
            association.password = hash;
            next();
        });
    });
});

// bcrypt compare authentication
associationSchema.methods.comparePassword = function(candidatePassword, callback) {
    bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
        if (err) {
            return callback(err);
        }
        callback(null, isMatch);
    });
};


module.exports = mongoose.model("Association", associationSchema);