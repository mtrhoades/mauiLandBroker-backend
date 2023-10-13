const categories = require("express").Router(); 
const Association = require('../models/Association'); // requiring models to use schema - Association

// GET a single category object route for editing the category name
categories.get('/:id', async (req, res) => {
    const categoryId = req.params.id;
    // console.log(categoryId);
    try {
        const result = await Association.findOne({'filecategories._id': categoryId});
        const categoriesArray = result.filecategories;
        // console.log(categoriesArray);
        for (let i = 0; i < categoriesArray.length; i++) {
            if (categoryId === categoriesArray[i].id) {
                // console.log(categoriesArray[i].id)
                // res.status(201).json({category: categoriesArray[i].categoryname})
                res.render("editSingleFileCategoryPage", {
                    category: categoriesArray[i],
                });
            }
        }
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

// PATCH route for actually editing/updating category name
categories.patch('/:id', async (req, res) => {
    const categoryId = req.params.id;
    try {
        const result = await Association.findOneAndUpdate(
            {'filecategories._id': categoryId},
            {$set: {'filecategories.$': req.body}},
            {new: true}
        );
        const associationId = result.id
        console.log(result.id);
        if(result){
            // res.json(result);
            res.render("fileCategorySingleAssoc", {
                association: result
            });
        } else {
            res.status(404).json({error: "Something Went Wrong!"})
        }
    } catch (error) {
        res.status(500).json({error: "Something Went Wrong!"})
    }
});

module.exports = categories;