// dependencies
const express = require('express');
const cors = require('cors');
const connectDB = require("./models/connect");
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');

// const User = require('./models/User.js');

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
app.use(cookieParser());

// session auth middleware
const oneHour = 1000 * 60 * 60; // creating 1 hour from miliseconds
app.use(session({
    secret: 'Hkdkwu7356%$hhdHHS7@#78495mmmnfaat62!09',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: oneHour }
}));

function requireAuth(req, res, next) {
    if (req.session.userId) { // Assuming you use session for user authentication
      return next(); // User is authenticated, proceed to the route
    } else {
      res.redirect('/admin'); // User is not authenticated, redirect to login page
    }
  }

// for adding a new user
// const newUser = new User({
//     username: 'admin2',
//     password: 'Bu55%aCak*s'
// });
// newUser.save();

// root route 
app.get('/', (req, res) => {
    res.send("Root Route Home Page");
});

// controller routes here
app.use('/admin', require ('./controllers/authentication'));
app.use('/admin/associations', requireAuth, require('./controllers/associations'));
app.use('/admin/associations/files', requireAuth, require('./controllers/files'));

// logout button functionality
app.get('/logout', (req, res) => {
    // Destroy the user session
    req.session.destroy((err) => {
      if (err) {
        console.error('Error destroying session:', err);
      }
      // Redirect the user to the login page (you can replace this with any other desired page)
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
