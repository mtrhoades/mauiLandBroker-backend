const logins = require("express").Router(); 
const User = require('../models/User'); // requiring models to use schema - Users

// login form page route
logins.get('/', (req, res) => {
    res.render("logInPage");
});

// Route to handle login form submission
logins.post('/', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });
        console.log(user); // user object

        if (!user) {
            throw new Error('Invalid username');
        }

        const isMatch = await new Promise((resolve, reject) => {
            user.comparePassword(password, (passwordErr, match) => {
                if (passwordErr || !match) {
                    reject(new Error('Invalid password'));
                } else {
                    resolve(match);
                    console.log(match); // true
                }
            });
        });

        req.session.userId = user._id; // Set session identifier to the user id from user object
        console.log(req.session);
        
        // Authentication successful
        // res.status(200).json({ message: 'Login successful' });    
        return res.redirect("/admin/associations");
    } catch (error) {
        // Handle errors and return appropriate responses
        res.status(401).json({ message: error.message },);
    }
});

module.exports = logins;