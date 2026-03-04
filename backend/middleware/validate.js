const Joi = require("joi");

const taskValidation = Joi.object({
    title : Joi.string().required().min(3).trim(),
    description : Joi.string().optional().allow(''),
    status : Joi.string().valid("pending", "complete").optional()
});

const registerValidation = Joi.object({
    name : Joi.string().required().min(3).trim(),
    email : Joi.string().required().email(),
    password : Joi.string().min(6).required()
})

const loginValidation = Joi.object({
    email : Joi.string().required().email(),
    password : Joi.string().min(6).required()
})

const validate = (schema) => {
    return ((req, res, next) => {
        const {error} = schema.validate(req.body);
        if(error){
            return res.status(400).json({
                message : error.details[0].message
            })
        }
        next();
    })
}

module.exports = { taskValidation, validate, registerValidation, loginValidation }