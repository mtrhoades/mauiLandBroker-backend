const files = require("express").Router(); 
const Association = require('../models/Association'); // requiring models to use schema - Association
const multer = require('multer');
// const upload = multer({ dest: "pdfs" }); // middleware configuration to use multer and uploads files that are chosen to 'pdfs' folder.
//Configuration for Multer
const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "pdfs");
    },
    filename: (req, file, cb) => {
      const ext = file.mimetype.split("/")[1];
      cb(null, `${file.originalname}.${ext}`);
    },
  });

const upload = multer({
    storage: multerStorage
});

// GET A SINGLE association route to view ALL file categories for that association
files.get('/:id', async (req, res) => {
    try {
        const associationId = req.params.id;
        const result = await Association.findById({_id: associationId});
        // console.log(result)
        // res.status(201).json({associations: result})
        res.render("fileCategorySingleAssoc", {
            association: result,
        });                
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

// POST route for adding a file category
files.post('/:id', async (req, res) => {
    console.log(req.session);
    const associationId = req.params.id;
    const newCategory = {
        categoryname: '',
        files: []
      };
    try {
        const result = await Association.findOneAndUpdate(
            {_id: associationId},
            {$push: {'filecategories': newCategory.categoryname = req.body}},
            {new: true}
        );
        // console.log(result);
        res.redirect(req.get('referer'));
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});

// GET a single category object route for editing the category name
files.get('/:id/categories/:catid', async (req, res) => {
    const associationId = req.params.id;
    const categoryId = req.params.catid;
    // console.log(categoryId);
    try {
        const result = await Association.findOne(
            {'filecategories._id': categoryId}
        );
        const categoriesArray = result.filecategories;
        // console.log(result);
        for (let i = 0; i < categoriesArray.length; i++) {
            if (categoryId === categoriesArray[i].id) {
                // console.log(categoriesArray[i])
                // res.status(201).json({category: categoriesArray[i].categoryname})
                res.render("editSingleFileCategoryPage", {
                    category: categoriesArray[i],
                    associationId: associationId
                });
            }
        }
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

// PATCH route for actually editing/updating category name
files.patch('/:id/categories/:catid', async (req, res) => {
    const associationId = req.params.id;
    const categoryId = req.params.catid;
    try {
        const result = await Association.findOneAndUpdate(
            {'filecategories._id': categoryId},
            {$set: {'filecategories.$': req.body}},
            {new: true}
        );
        // console.log(result);
        if(result){
            // res.json(result);
            res.redirect(`/admin/associations/files/${associationId}`);
        } else {
            res.status(404).json({error: "Something Went Wrong!"})
        }
    } catch (error) {
        res.status(500).json({error: "Something Went Wrong!"})
    }
});

// DELETE route for deleting category object
files.delete('/:id/categories/:catid', async (req, res) => {
    const associationId = req.params.id;
    const categoryId = req.params.catid;
    try {
        const result = await Association.findOne({'filecategories._id': categoryId}).updateOne(
            {_id: associationId},
            {$pull: {'filecategories': {_id: categoryId}}},
            {new: true}
        );
        // console.log(result);
        // res.json({deletedCount: result.modifiedCount});
        res.redirect(`/admin/associations/files/${associationId}`);
    } catch (error) {
        res.status(500).json({error: "Something Went Wrong!"})
    }
});


// *************************************pdfs routes:************************************************

// GET a single category object route for managing pdf files to the specific category name
files.get('/:id/categories/:catid/pdfs', async (req, res) => {
    const associationId = req.params.id;
    const categoryId = req.params.catid;
    try {
        const result = await Association.findOne(
            {'filecategories._id': categoryId}
        );
        const categoriesArray = result.filecategories;
        // console.log(result);
        for (let i = 0; i < categoriesArray.length; i++) {
            if (categoryId === categoriesArray[i].id) {
                // res.status(201).json({category: categoriesArray[i].categoryname})
                res.render("managePdfs", {
                    categoryObject: categoriesArray[i],
                    associationId: associationId,
                    association: result
                });
            }
        }
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

// POST route for uploading pdf file to files array
files.post('/:id/categories/:catid/pdfs', upload.single('filename'), async (req, res) => {
    const associationId = req.params.id;
    const categoryId = req.params.catid;
    const newFile = {
        filename: req.file.originalname,
        size: req.file.size,
        filepath: req.file.path
    }
    try {
        const result = await Association.updateOne(
            {_id: associationId},
            {$push: {'filecategories.$[category].files': newFile}},
            {arrayFilters: [{'category._id': categoryId}]},
            {new: true}
        );
        console.log(req.file);
        res.redirect(req.get('referer'));
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

// GET route for a single file object from files array
files.get('/:id/categories/:catid/pdfs/:pdfid', async (req, res) => {
    const associationId = req.params.id;
    const categoryId = req.params.catid;
    const pdfId = req.params.pdfid
    try {
        const result = await Association.findOne(
            {'filecategories._id': categoryId}
        );
        const categoriesArray = result.filecategories;
        for (let i = 0; i < categoriesArray.length; i++) {
            if (categoryId === categoriesArray[i].id) {
                const filesArray = categoriesArray[i].files
                for(let j = 0; j < filesArray.length; j++) {
                    if (pdfId === filesArray[j].id) {
                        // console.log(filesArray[j]);
                        res.render("editSingleFilePage", {
                            file: filesArray[j],
                            categoryObjectId: categoriesArray[i].id,
                            associationId: associationId
                        })
                    }
                }
            }
        }
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

// PATCH route for editing the file name
files.patch('/:id/categories/:catid/pdfs/:pdfid', async (req, res) => {
    const associationId = req.params.id;
    const categoryId = req.params.catid;
    const pdfId = req.params.pdfid;
    const categoryObjectFilter = {'category._id': categoryId};
    const fileObjectFilter = {'file._id': pdfId};
    try {
        const result = await Association.findOneAndUpdate(
            {'filecategories._id': categoryId},
            {$set: {'filecategories.$[category].files.$[file]': req.body}},
            {arrayFilters: [categoryObjectFilter, fileObjectFilter]},
            {new: true}
        );
        // console.log(result);
        if(result){
            res.redirect(`/admin/associations/files/${associationId}/categories/${categoryId}/pdfs`);
        } else {
            res.status(404).json({error: "Something Went Wrong!"})
        }
    } catch (error) {
        res.status(500).json({error: "Something Went Wrong!"})
    }
});

// DELETE route for deleting a file object from the files array
files.delete('/:id/categories/:catid/pdfs/:pdfid', async (req, res) => {
    const associationId = req.params.id;
    const categoryId = req.params.catid;
    const pdfId = req.params.pdfid;
    const categoryObjectFilter = {'category._id': categoryId};
    const fileObjectFilter = {'file._id': pdfId};
    try {
        const result = await Association.findOne({'filecategories._id': categoryId}).updateOne(
            {_id: associationId},
            {$pull: {'filecategories.$[category].files': {_id: pdfId}}},
            {arrayFilters: [categoryObjectFilter, fileObjectFilter], new: true},
        );
        // console.log(result);
        res.redirect(`/admin/associations/files/${associationId}/categories/${categoryId}/pdfs`);
    } catch (error) {
        res.status(500).json({error: "Something Went Wrong!"})
    }
});

module.exports = files;