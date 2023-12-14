const express = require("express");
const fs = require("fs");
const locations = require("../helpers/locations");
const Category = require("../models/category");
const categoriesLogic = require("../business-logic/categories-logic");
const verifyLoggedIn = require("../middleware/verify-logged-in");
const router = express.Router();

// Get all categories: 
router.get("/", verifyLoggedIn, async (request, response) => {
    try {
        // Logic: 
        const categories = await categoriesLogic.getAllCategoriesAsync();

        // Success: 
        response.json(categories);
    }
    catch (err) {
       response.status(500).send(err.message);
    }
});

// Get one category: 
router.get("/:id([0-9]+)", verifyLoggedIn, async (request, response) => {
    try {
        // Data: 
        const id = +request.params.id;

        // Logic: 
        const category = await categoriesLogic.getOneCategoryAsync(id);
        if(!category) return response.status(404).send(`id ${id} not found.`);

        // Success: 
        response.json(category);
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});

// Add category: 
router.post("/", verifyLoggedIn, async (request, response) => {
    try {
        // Data: 
        const category = new Category(request.body);

        // Validation: 
        const errors = category.validate();
        if (errors) return response.status(400).send(errors);

        // Logic: 
        const addedCategory = await categoriesLogic.addCategoryAsync(category, request.files ? request.files.image : null);

        // Success: 
        response.status(201).json(addedCategory);
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});

// Update category: 
router.put("/:id([0-9]+)", verifyLoggedIn, async (request, response) => {
    try {
        // Data:
        const id = +request.params.id;
        request.body.id = id;
        const category = new Category(request.body);

        // Validation: 
        const errors = category.validate();
        if (errors) return response.status(400).send(errors);

        // Logic: 
        const updatedCategory = await categoriesLogic.updateCategoryAsync(category, request.files ? request.files.image : null);
        if(!updatedCategory) return response.status(404).send(`id ${id} not found.`);

        // Success: 
        response.json(updatedCategory);
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});

// Delete category: 
router.delete("/:id([0-9]+)", verifyLoggedIn, async (request, response) => {
    try {
        // Data: 
        const id = +request.params.id;

        // Logic: 
        await categoriesLogic.deleteCategoryAsync(id);

        // Success: 
        response.sendStatus(204);
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});

// Get category image:
router.get("/images/:imageName", (request, response) => {
    try {
        // Data: 
        const imageName = request.params.imageName;

        // Logic: 
        let imageFile = locations.getCategoryImageFile(imageName);
        if(!fs.existsSync(imageFile)) imageFile = locations.notFoundImageFile;
        
        // Success: 
        response.sendFile(imageFile);
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});

module.exports = router;