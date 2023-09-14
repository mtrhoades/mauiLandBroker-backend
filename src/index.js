// dependencies
const express = require('express');
const cors = require('cors');
const connectDB = require("./models/connect");
const methodOverride = require('method-override');
const Association = require('./models/Association');

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
app.use(methodOverride('_method'));

// adding schema mock data
const association = new Association({
    name: "Hale Kaiola"
});

// root route (home page for backend portal)
// app.get('/', (req, res) => {
//     res.send(association);
// });
app.get('/', (req, res) => {
    res.send("Welcome to MLB ADMIN. back-end!");
});

// controller routes here
app.use('/associations', require('./controllers/associations'));

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