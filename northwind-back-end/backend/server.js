const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const productsController = require("./controllers/products-controller");
const employeesController = require("./controllers/employees-controller");
const categoriesController = require("./controllers/categories-controller");
const contactUsController = require("./controllers/contact-us-controller");
const authController = require("./controllers/auth-controller");
const splashScreen = require("../cli/splash-screen");

function run() {
    const server = express();

    server.use(cors());
    server.use(express.json());
    server.use(fileUpload());
    server.use("/api/products", productsController);
    server.use("/api/employees", employeesController);
    server.use("/api/categories", categoriesController);
    server.use("/api/contact-us", contactUsController);
    server.use("/api/auth", authController);
    server.use("*", (request, response) => response.status(404).send("Route Not Found"));

    server.listen(3030, splashScreen);
}

module.exports = { run };
