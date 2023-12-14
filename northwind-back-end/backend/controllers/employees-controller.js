const express = require("express");
const fs = require("fs");
const locations = require("../helpers/locations");
const Employee = require("../models/employee");
const employeesLogic = require("../business-logic/employees-logic");
const router = express.Router();
const verifyLoggedIn = require("../middleware/verify-logged-in");

// Get all employees: 
router.get("/", verifyLoggedIn, async (request, response) => {
    try {
        // Logic: 
        const employees = await employeesLogic.getAllEmployeesAsync();

        // Success: 
        response.json(employees);
    }
    catch (err) {
       response.status(500).send(err.message);
    }
});

// Get one employee: 
router.get("/:id([0-9]+)", async (request, response) => {
    try {
        // Data: 
        const id = +request.params.id;

        // Logic: 
        const employee = await employeesLogic.getOneEmployeeAsync(id);
        if(!employee) return response.status(404).send(`id ${id} not found.`);

        // Success: 
        response.json(employee);
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});

// Add employee: 
router.post("/", async (request, response) => {
    try {
        // Data: 
        const employee = new Employee(request.body);

        // Validation: 
        const errors = employee.validate();
        if (errors) return response.status(400).send(errors);

        // Logic: 
        const addedEmployee = await employeesLogic.addEmployeeAsync(employee, request.files ? request.files.image : null);

        // Success: 
        response.status(201).json(addedEmployee);
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});

// Update employee: 
router.put("/:id([0-9]+)", async (request, response) => {
    try {
        // Data: 
        const id = +request.params.id;
        request.body.id = id;
        const employee = new Employee(request.body);

        // Validation: 
        const errors = employee.validate();
        if (errors) return response.status(400).send(errors);

        // Logic: 
        const updatedEmployee = await employeesLogic.updateEmployeeAsync(employee, request.files ? request.files.image : null);
        if(!updatedEmployee) return response.status(404).send(`id ${id} not found.`);

        // Success: 
        response.json(updatedEmployee);
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});

// Delete employee: 
router.delete("/:id([0-9]+)", async (request, response) => {
    try {
        // Data: 
        const id = +request.params.id;

        // Logic: 
        await employeesLogic.deleteEmployeeAsync(id);

        // Success: 
        response.sendStatus(204);
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});

// Get employee image:
router.get("/images/:imageName", (request, response) => {
    try {
        // Data: 
        const imageName = request.params.imageName;

        // Logic: 
        let imageFile = locations.getEmployeeImageFile(imageName);
        if(!fs.existsSync(imageFile)) imageFile = locations.notFoundImageFile;
        
        // Success: 
        response.sendFile(imageFile);
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});

module.exports = router;