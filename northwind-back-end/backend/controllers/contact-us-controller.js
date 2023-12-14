const express = require("express");
const ContactUsMsg = require("../models/contact-us");
const contactUsLogic = require("../business-logic/contact-us-logic");
const router = express.Router();

// Get all contact-us messages: 
router.get("/", async (request, response) => {
    try {
        // Logic: 
        const contactUsMessages = await contactUsLogic.getAllContactUsMessagesAsync();

        // Success: 
        response.json(contactUsMessages);
    }
    catch (err) {
       response.status(500).send(err.message);
    }
});

// Add contact-us message: 
router.post("/", async (request, response) => {
    try {
        // Data: 
        const contactUsMsg = new ContactUsMsg(request.body);

        // Validation: 
        const errors = contactUsMsg.validate();
        if (errors) return response.status(400).send(errors);

        // Logic: 
        const addedContactUsMsg = await contactUsLogic.addContactUsMsgAsync(contactUsMsg);

        // Success: 
        response.status(201).json(addedContactUsMsg);
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});

module.exports = router;