const Association = require('../models/Association'); // requiring models to use schema - Association
const path = require('path');
const router = require("express").Router(); 


// Get all (read) associations
router.get('/associations', async (req, res) => {
    const result = await Association.find();
    res.send({"associations": result});
});


// Add a new association


// Delete an association

module.exports = router;