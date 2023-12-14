const dal = require("../data-access-layer/dal");
const locations = require("../helpers/locations");
const safeDelete = require("../helpers/safe-delete");

async function getAllEmployeesAsync() {
    const employees = await dal.getAllEmployeesAsync();
    return employees;
};

async function getOneEmployeeAsync(id) {
    const employees = await dal.getAllEmployeesAsync();
    const employee = employees.find(e => e.id === id);
    return employee;
};

async function addEmployeeAsync(employee, image) {
    const employees = await dal.getAllEmployeesAsync();
    const maxId = employees.reduce((maxId, e) => e.id > maxId ? e.id : maxId, 0);
    employee.id = maxId + 1;
    if (image) {
        const extension = image.name.substr(image.name.lastIndexOf("."));
        employee.imageName = employee.id + extension;
        const imageFile = locations.getEmployeeImageFile(employee.imageName);
        await image.mv(imageFile);
    }
    employees.push(employee);
    await dal.saveAllEmployeesAsync(employees);
    return employee;
};

async function updateEmployeeAsync(newEmployee, image) {
    const employees = await dal.getAllEmployeesAsync();
    const existingEmployee = employees.find(e => e.id === newEmployee.id);
    if (!existingEmployee) return null;
    for (const prop in newEmployee) {
        if (newEmployee[prop] !== undefined) {
            existingEmployee[prop] = newEmployee[prop];
        }
    }
    if (image) {
        let imageFile = locations.getEmployeeImageFile(existingEmployee.imageName);
        safeDelete(imageFile);
        const extension = image.name.substr(image.name.lastIndexOf("."));
        existingEmployee.imageName = existingEmployee.id + extension;
        imageFile = locations.getEmployeeImageFile(existingEmployee.imageName);
        await image.mv(imageFile);
    }
    await dal.saveAllEmployeesAsync(employees);
    return existingEmployee;
};

async function deleteEmployeeAsync(id) {
    const employees = await dal.getAllEmployeesAsync();
    const index = employees.findIndex(e => e.id === id);
    if (index === -1) return;
    const imageFile = locations.getEmployeeImageFile(employees[index].imageName);
    safeDelete(imageFile);
    employees.splice(index, 1);
    await dal.saveAllEmployeesAsync(employees);
};

module.exports = {
    getAllEmployeesAsync,
    getOneEmployeeAsync,
    addEmployeeAsync,
    updateEmployeeAsync,
    deleteEmployeeAsync
};