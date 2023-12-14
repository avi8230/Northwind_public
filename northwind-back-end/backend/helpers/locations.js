const path = require("path");

const rootFolder = path.resolve(__dirname, "..", "..");
const productsJsonFile = path.join(rootFolder, "backend", "database", "products.json");
const employeesJsonFile = path.join(rootFolder, "backend", "database", "employees.json");
const categoriesJsonFile = path.join(rootFolder, "backend", "database", "categories.json");
const usersJsonFile = path.join(rootFolder, "backend", "database", "users.json");
const contactUsJsonFile = path.join(rootFolder, "backend", "database", "contact-us.json");
const productImagesFolder = path.join(rootFolder, "backend", "images", "products");
const employeeImagesFolder = path.join(rootFolder, "backend", "images", "employees");
const categoryImagesFolder = path.join(rootFolder, "backend", "images", "categories");
const notFoundImageFile = path.join(rootFolder, "backend", "images", "not-found.jpg");

function getProductImageFile(imageName) {
    if(!imageName) return null;
    return path.join(productImagesFolder, imageName);
}

function getEmployeeImageFile(imageName) {
    if(!imageName) return null;
    return path.join(employeeImagesFolder, imageName);
}

function getCategoryImageFile(imageName) {
    if(!imageName) return null;
    return path.join(categoryImagesFolder, imageName);
}

module.exports = {
    productsJsonFile,
    employeesJsonFile,
    categoriesJsonFile,
    usersJsonFile,
    contactUsJsonFile,
    getProductImageFile,
    getEmployeeImageFile,
    getCategoryImageFile,
    notFoundImageFile
};