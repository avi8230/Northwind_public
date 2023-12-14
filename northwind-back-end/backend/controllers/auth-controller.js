const express = require("express");
const User = require("../models/user");
const Credentials = require("../models/credentials");
const authLogic = require("../business-logic/auth-logic");
const router = express.Router();

// Register: 
router.post("/register", async (request, response) => {
    try {
        // Data: 
        const user = new User(request.body);

        // Validation: 
        const errors = user.validate();
        if (errors) return response.status(400).send(errors);
        if(await authLogic.isUsernameTaken(user.username)) return response.status(400).send(`Username "${user.username}" already taken.`);

        // Logic: 
        const token = await authLogic.registerAsync(user);

        // Success: 
        response.status(201).json(token);
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});

// Login: 
router.post("/login", async (request, response) => {
    try {
        // Data: 
        const credentials = new Credentials(request.body);

        // Validation: 
        const errors = credentials.validate();
        if (errors) return response.status(400).send(errors);

        // Logic: 
        const token = await authLogic.loginAsync(credentials);
        if (!token) return response.status(401).send("Incorrect username or password.");

        // Success: 
        response.json(token);
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});

module.exports = router;