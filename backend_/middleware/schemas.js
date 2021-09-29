const Joi = require("joi");
module.exports={
    registerUser:{
        "name":Joi.string().min(3).max(12).required(),
        "password":Joi.string().min(7).max(12).required(),
        "username":Joi.string().min(3).max(12).required(),
        "lastname":Joi.string().min(3).max(12).required()
    },
    loginUser:{
        "username":Joi.string().min(3).max(12).required(),
        "password":Joi.string().min(7).max(12).required()
    },
    modifyUser:{
        "libro":Joi.string().min(3).max(30).required(),
        "user":Joi.string().min(7).max(30).required(),
        "estado":Joi.string().min(2).max(12).required()
    }
}