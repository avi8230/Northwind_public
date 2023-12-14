const fs = require("fs");
const locations = require("../helpers/locations");

function getAllProductsAsync() {
    return new Promise((resolve, reject) => {
        fs.readFile(locations.productsJsonFile, "utf-8", (err, fileContent) => {
            if (err) return reject(err);
            const products = JSON.parse(fileContent);
            resolve(products);
        });
    });
};

function saveAllProductsAsync(products) {
    return new Promise((resolve, reject) => {
        const fileContent = JSON.stringify(products, null, 4);
        fs.writeFile(locations.productsJsonFile, fileContent, err => {
            if (err) return reject(err);
            resolve();
        });
    });
}

function getAllEmployeesAsync() {
    return new Promise((resolve, reject) => {
        fs.readFile(locations.employeesJsonFile, "utf-8", (err, fileContent) => {
            if (err) return reject(err);
            const employees = JSON.parse(fileContent);
            resolve(employees);
        });
    });
};

function saveAllEmployeesAsync(employees) {
    return new Promise((resolve, reject) => {
        const fileContent = JSON.stringify(employees, null, 4);
        fs.writeFile(locations.employeesJsonFile, fileContent, err => {
            if (err) return reject(err);
            resolve();
        });
    });
}

function getAllCategoriesAsync() {
    return new Promise((resolve, reject) => {
        fs.readFile(locations.categoriesJsonFile, "utf-8", (err, fileContent) => {
            if (err) return reject(err);
            const categories = JSON.parse(fileContent);
            resolve(categories);
        });
    });
};

function saveAllCategoriesAsync(categories) {
    return new Promise((resolve, reject) => {
        const fileContent = JSON.stringify(categories, null, 4);
        fs.writeFile(locations.categoriesJsonFile, fileContent, err => {
            if (err) return reject(err);
            resolve();
        });
    });
}

function getAllUsersAsync() {
    return new Promise((resolve, reject) => {
        fs.readFile(locations.usersJsonFile, "utf-8", (err, fileContent) => {
            if (err) return reject(err);
            const users = JSON.parse(fileContent);
            resolve(users);
        });
    });
};

function saveAllUsersAsync(users) {
    return new Promise((resolve, reject) => {
        const fileContent = JSON.stringify(users, null, 4);
        fs.writeFile(locations.usersJsonFile, fileContent, err => {
            if (err) return reject(err);
            resolve();
        });
    });
}

function getAllContactUsMessagesAsync() {
    return new Promise((resolve, reject) => {
        fs.readFile(locations.contactUsJsonFile, "utf-8", (err, fileContent) => {
            if (err) return reject(err);
            const users = JSON.parse(fileContent);
            resolve(users);
        });
    });
};

function saveAllContactUsMessagesAsync(users) {
    return new Promise((resolve, reject) => {
        const fileContent = JSON.stringify(users, null, 4);
        fs.writeFile(locations.contactUsJsonFile, fileContent, err => {
            if (err) return reject(err);
            resolve();
        });
    });
}

module.exports = {
    getAllProductsAsync,
    saveAllProductsAsync,
    getAllEmployeesAsync,
    saveAllEmployeesAsync,
    getAllCategoriesAsync,
    saveAllCategoriesAsync,
    getAllUsersAsync,
    saveAllUsersAsync,
    getAllContactUsMessagesAsync,
    saveAllContactUsMessagesAsync
};