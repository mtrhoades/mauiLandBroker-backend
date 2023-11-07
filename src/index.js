// dependencies
const express = require('express');
const cors = require('cors');
const connectDB = require("./models/connect");
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');

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
app.use("/pdfs", express.static("pdfs"));


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
// const User = require('./models/User.js');
// const newUser = new User({
//     username: 'admin',
//     password: 'JrbfN6BDpJ'
// });
// newUser.save();

// for adding new association
// const Association = require('./models/Association.js');
// const newAssociation = new Association(
//   {
//   name: "Wailuku Parkside",
//   directory: 'wailukuparkside',
//   username: "waipark",
//   password: "wp456"
// }
// );
// newAssociation.save();

// root route 
app.get('/', (req, res) => {
    res.send("Root Route Home Page");
});

// admin controller routes here
app.use('/admin', require ('./controllers/authentication')); // for admin login logic
app.use('/admin/associations', requireAuth, require('./controllers/associations'));
app.use('/admin/associations/files', requireAuth, require('./controllers/files'));

// client side controller routes here
app.use('/associationslist', require ('./controllers/clientSideControllers/associationslist'));
app.use('/associationslogins', require ('./controllers/clientSideControllers/associationslogins'));

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