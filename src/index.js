// dependencies
const express = require('express');
const cors = require('cors');

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

// root route (home page for backend portal)
app.get('/admin', (req, res) => {
    res.render("backendHomePage");
});

// controller routes here

// server listen
app.listen(PORT, () => {
    console.log("Yea Dawg we up in here on Port", PORT)
});

