const files = require("express").Router(); 
const Association = require('../models/Association'); // requiring models to use schema - Association


// GET A SINGLE association route to view file categories for that association
files.get('/:id', async (req, res) => {
    try {
        const associationId = req.params.id;
        const result = await Association.findById({_id: associationId});
        // res.status(201).json({associations: result})
        res.render("fileCategorySingleAssoc", {
            association: result,
        });                
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

// GET ALL route for file categories to specific association
files.get('/:id', async (req, res) => {
    const associationId = req.params.id;
    try {
        const result = await Association.find();
        // res.json({"associations": result});
        res.render("fileCategorySingleAssoc", {
            association: result,
        });                
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

// POST route for adding a file category


// PUT route


module.exports = files;