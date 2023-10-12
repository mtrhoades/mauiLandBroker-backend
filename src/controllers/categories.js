const categories = require("express").Router(); 
const Association = require('../models/Association'); // requiring models to use schema - Association

// GET a single category object route for editing the category name
categories.get('/:id', async (req, res) => {
    const categoryId = req.params.id;
    console.log(categoryId);
    try {
        const result = await Association.findOne({'filecategories._id': categoryId});
        // if (categoryId === categories._id) {
        // }
        res.status(201).json({categories: result.filecategories})
        // res.render("editSingleFileCategoryPage", {
        //     category: result,
        // });                
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

module.exports = categories;