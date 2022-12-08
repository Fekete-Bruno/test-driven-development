import Joi from "joi";

const todoSchema = Joi.object({
    text:Joi.string().required(),
    is_done:Joi.boolean().required()
});

export default todoSchema;