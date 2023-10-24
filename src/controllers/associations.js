const associations = require("express").Router(); 
const Association = require('../models/Association'); // requiring models to use schema - Association

// Get all (read) associations
associations.get('/', async (req, res) => {
    try {
        const result = await Association.find();
        // res.json({"associations": result});
        res.render("backendHomePage", {
            associations: result,
        });
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

// Get a single association 
associations.get('/:id', async (req, res) => {
    try {
        const associationId = req.params.id;
        const result = await Association.findById({_id: associationId});
        // res.status(201).json({associations: result});
        // console.log(result.filecategories[0].files[1]);
        res.render("editSingleAssociationPage", {
            association: result,
        });                
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

// Create a new association
associations.post('/', async (req, res) => {
    // console.log(req.body);
    const newAssociation = new Association(req.body);
    try {
        await newAssociation.save();
        // res.status(201).json({newAssociation});
        res.redirect("/admin/associations");
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});

// Delete an association
associations.delete('/:id', async (req, res) => {
    try {
        const associationId = req.params.id;
        const result = await Association.findByIdAndDelete({_id: associationId});
        // res.json({deletedCount: result.deletedCount});
        res.status(303).redirect('/admin/associations')
    } catch (error) {
        res.status(500).json({error: "Something Went Wrong!"})
    }
});

// Update a single association name and/or directory
associations.patch('/:id', async (req, res) => {
    try {
        const associationId = req.params.id;
        const result = await Association.findOneAndUpdate({_id: associationId}, req.body, {new: true});
        console.log(result);
        // res.json({result});
        res.redirect("/admin/associations");
    } catch (error) {
        res.status(500).json({error: "Something Went Wrong!"})
    }
});

module.exports = associations;