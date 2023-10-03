const editinfos = require("express").Router(); 
const Association = require('../models/Association'); // requiring models to use schema - Association

// Get a single association all info.
editinfos.get('/:id', async (req, res) => {
    try {
        const associationId = req.params.id;
        const result = await Association.findById({_id: associationId});
        // res.status(201).json({associations: result})
        res.render("singleEditInfoPage", {
            association: result,
        });                
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

// edit association name 
editinfos.patch('/:id', async (req, res) => {
    try {
        const associationId = req.params.id;
        const result = await Association.findOneAndUpdate({_id: associationId}, req.body, {new: true});
        console.log(result);
        // res.json({association: result});
        res.redirect("/admin/associations");
    } catch (error) {
        res.status(500).json({error: "Something Went Wrong!"})
    }
});

module.exports = editinfos;