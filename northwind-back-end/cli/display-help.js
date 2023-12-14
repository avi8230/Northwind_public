function displayHelp() {
    console.log("This is a local REST API for some of Northwind data.");
    console.log("Northwind products can be accessed at: http://localhost:3030/api/products");
    console.log("Northwind employees can be accessed at: http://localhost:3030/api/employees");
    console.log("Northwind categories can be accessed at: http://localhost:3030/api/categories");
    console.log("Registration can be done at: http://localhost:3030/api/auth/register");
    console.log("Login can be done: http://localhost:3030/api/auth/login");
    console.log("The registration/login is done via JWT technique");
    console.log("The categories can be accessed only after registration or login.");
    console.log("Read the documentation at: https://www.npmjs.com/package/northwind-back-end");
}

module.exports = displayHelp;