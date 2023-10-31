// dependencies
const express = require('express');
const cors = require('cors');
const connectDB = require("./models/connect");
const methodOverride = require('method-override');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const User = require('./models/User.js');

// configuration
require('dotenv').config();
const PORT = process.env.PORT;
const app = express();

// middleware
app.set('views', __dirname + '/views');
app.use(express.static('public')); // access to public folder for css and images.
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// session authentication middleware
app.use(cookieParser());
app.use(session({
    secret: 'Heie73%$##ije*&JJdszza!3450',
    resave: false,
    saveUninitialized: true,
}));

// for adding a new user
// const newUser = new User({
//     username: 'admin2',
//     password: 'Bu55%aCak*s'
// });
// newUser.save();

// root route (home page for login)
app.get('/admin', (req, res) => {
    res.render("logInPage");
});

// Route to handle login form submission
app.post('/admin', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });

        if (!user) {
            throw new Error('Invalid username or password');
        }

        const isMatch = await new Promise((resolve, reject) => {
            user.comparePassword(password, (passwordErr, match) => {
                if (passwordErr || !match) {
                    reject(new Error('Invalid username or password'));
                } else {
                    resolve(match);
                }
            });
        });

        if (!isMatch) {
            throw new Error('Invalid username or password');
        }

        // You can set a session or token to keep the user authenticated
        req.session.user = user;
        console.log(user);

        // Authentication successful
        // res.status(200).json({ message: 'Login successful' });
        
        // controller routes here
        app.use('/admin/associations', require('./controllers/associations'));
        app.use('/admin/associations/files', require('./controllers/files'));

        res.redirect("/admin/associations");
    } catch (error) {
        // Handle errors and return appropriate responses
        res.status(401).json({ message: error.message });
    }
});

// logout button functionality
app.get('/logout', (req, res) => {
    // Destroy the user's session
    req.session.destroy((err) => {
        if (err) {
            // Handle any errors during session destruction
            console.error('Error during logout:', err);
        }
        // Redirect to the login page or any other desired location
        res.redirect('/admin');
    });
});

// server listen
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(PORT, () => {
            console.log("Yea Dawg we up in here on Port", PORT)
        });        
    } catch (error) {
        console.log(error.message);
    }
};
start();
