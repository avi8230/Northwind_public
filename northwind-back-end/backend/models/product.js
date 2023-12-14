const Joi = require("joi");
const BaseModel = require("./base-model");

class Product extends BaseModel {

    constructor(product) {
        super(product.id);
        this.name = product.name;
        this.price = product.price;
        this.stock = product.stock;
        this.imageUrl = product.imageUrl;
    }

    static #validationSchema = Joi.object({
        id: Joi.number().optional().integer().positive(),
        name: Joi.string().required().min(2).max(100),
        price: Joi.number().required().min(0).max(10000),
        stock: Joi.number().required().min(0).max(10000).integer(),
        imageUrl: Joi.string().optional().min(5).max(100)
    }).error(BaseModel.customErrors);

    validate() {
        const result = Product.#validationSchema.validate(this);
        return result.error?.message;
    }
}

module.exports = Product;