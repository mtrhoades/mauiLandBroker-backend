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
files.post('/:id', async (req, res) => {
    const associationId = req.params.id;
    const newCategory = {
        categoryname: 'Balance Sheets', // needs to link to whatever is typed in input field!
        files: []
      };
    try {
        await Association.findOneAndUpdate({_id: associationId}, {$push: {filecategories: newCategory}}, {new: true});
        res.redirect(req.get('referer'));
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});


// PUT route


module.exports = files;