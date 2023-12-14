const Joi = require("joi");
const BaseModel = require("./base-model");

class Category extends BaseModel {

    constructor(category) {
        super(category.id);
        this.name = category.name;
        this.description = category.description;
        this.imageName = category.imageName;
    }

    static #validationSchema = Joi.object({
        id: Joi.number().optional().integer().positive(),
        name: Joi.string().required().min(2).max(100),
        description: Joi.string().required().min(2).max(100),
        imageName: Joi.string().optional().min(5).max(100)
    }).error(BaseModel.customErrors);

    validate() {
        const result = Category.#validationSchema.validate(this, { abortEarly: false });
        return result.error ? result.error.details.map(err => err.message) : null;
    }
}

module.exports = Category;