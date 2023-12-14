const express = require("express");
const fs = require("fs");
const locations = require("../helpers/locations");
const Product = require("../models/product");
const productsLogic = require("../business-logic/products-logic");
const delay = require("../middleware/delay");
const router = express.Router();

// Get all products: 
router.get("/", async (request, response) => {
    try {
        // Logic: 
        const products = await productsLogic.getAllProductsAsync();

        // Success: 
        response.json(products);
    }
    catch (err) {
       response.status(500).send(err.message);
    }
});

// Get all products but with some delay to simulate a busy server: 
router.get("/delayed", delay, async (request, response) => {
    try {
        // Logic: 
        const products = await productsLogic.getAllProductsAsync();

        // Success: 
        response.json(products);
    }
    catch (err) {
       response.status(500).send(err.message);
    }
});

// Get one product: 
router.get("/:id([0-9]+)", async (request, response) => {
    try {
        // Data: 
        const id = +request.params.id;

        // Logic: 
        const product = await productsLogic.getOneProductAsync(id);
        if(!product) return response.status(404).send(`id ${id} not found.`);

        // Success: 
        response.json(product);
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});

// Get one product but with some delay to simulate a busy server: 
router.get("/delayed/:id([0-9]+)", delay, async (request, response) => {
    try {
        // Data: 
        const id = +request.params.id;

        // Logic: 
        const product = await productsLogic.getOneProductAsync(id);
        if(!product) return response.status(404).send(`id ${id} not found.`);

        // Success: 
        response.json(product);
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});

// Add product: 
router.post("/", async (request, response) => {
    try {
        // Data: 
        const product = new Product(request.body);

        // Validation: 
        const errors = product.validate();
        if (errors) return response.status(400).send(errors);

        // Logic: 
        const addedProduct = await productsLogic.addProductAsync(product, request.files ? request.files.image : null);

        // Success: 
        response.status(201).json(addedProduct);
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});

// Update product: 
router.put("/:id([0-9]+)", async (request, response) => {
    try {
        // Data: 
        const id = +request.params.id;
        request.body.id = id;
        const product = new Product(request.body);

        // Validation: 
        const errors = product.validate();
        if (errors) return response.status(400).send(errors);

        // Logic: 
        const updatedProduct = await productsLogic.updateProductAsync(product, request.files ? request.files.image : null);
        if(!updatedProduct) return response.status(404).send(`id ${id} not found.`);

        // Success: 
        response.json(updatedProduct);
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});

// Delete product: 
router.delete("/:id([0-9]+)", async (request, response) => {
    try {
        // Data: 
        const id = +request.params.id;

        // Logic: 
        await productsLogic.deleteProductAsync(id);

        // Success: 
        response.sendStatus(204);
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});

// Get product image:
router.get("/images/:imageName", (request, response) => {
    try {
        // Data: 
        const imageName = request.params.imageName;

        // Logic: 
        let imageFile = locations.getProductImageFile(imageName);
        if(!fs.existsSync(imageFile)) imageFile = locations.notFoundImageFile;
        
        // Success: 
        response.sendFile(imageFile);
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});

module.exports = router;