const Joi = require("joi");
const BaseModel = require("./base-model");

class ContactUsMsg extends BaseModel {

    constructor(contactUsMsg) {
        super(contactUsMsg.id);
        this.name = contactUsMsg.name;
        this.email = contactUsMsg.email;
        this.phone = contactUsMsg.phone;
        this.message = contactUsMsg.message;
    }

    static #validationSchema = Joi.object({
        id: Joi.number().optional().integer().positive(),
        name: Joi.string().required().min(2).max(100),
        email: Joi.string().optional().min(2).max(100),
        phone: Joi.string().optional().min(2).max(100),
        message: Joi.string().required().min(2).max(1000)
    }).error(BaseModel.customErrors);

    validate() {
        const result = ContactUsMsg.#validationSchema.validate(this, { abortEarly: false });
        return result.error ? result.error.details.map(err => err.message) : null;
    }
}

module.exports = ContactUsMsg;