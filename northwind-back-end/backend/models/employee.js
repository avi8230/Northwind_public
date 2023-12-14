const Joi = require("joi");
const BaseModel = require("./base-model");

class Employee extends BaseModel {

    constructor(employee) {
        super(employee.id);
        this.firstName = employee.firstName;
        this.lastName = employee.lastName;
        this.title = employee.title;
        this.country = employee.country;
        this.city = employee.city;
        this.birthDate = employee.birthDate;
        this.imageName = employee.imageName;
    }

    static #validationSchema = Joi.object({
        id: Joi.number().optional().integer().positive(),
        firstName: Joi.string().required().min(2).max(100),
        lastName: Joi.string().required().min(2).max(100),
        title: Joi.string().optional().min(2).max(100),
        country: Joi.string().optional().min(2).max(100),
        city: Joi.string().optional().min(2).max(100),
        birthDate: Joi.date().optional(),
        imageName: Joi.string().optional().min(5).max(100)
    }).error(BaseModel.customErrors);
    
    validate() {
        const result = Employee.#validationSchema.validate(this, { abortEarly: false });
        return result.error ? result.error.details.map(err => err.message) : null;
    }
}

module.exports = Employee;