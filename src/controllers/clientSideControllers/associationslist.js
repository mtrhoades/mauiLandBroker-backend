const associationslist = require("express").Router(); 
const Association = require('../../models/Association'); // requiring models to use schema - Association
const path = require("path")
const pdfsDirectory = path.join(__dirname, 'pdfs'); // Path to the "pdfs" folder

// Get all (read) associations
associationslist.get('/', async (req, res) => {
    try {
        const result = await Association.find();
        res.json({"associations": result});
        // console.log(result);
        // res.render("backendHomePage", {
        //     associations: result,
        // });
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});


module.exports = associationslist;