module.exports = function(model) {
  var express = require('express');
  var router = express.Router();
  var validacionJoi =require("../middleware/middlewareJoi");
  var validacionJWT=require("../middleware/middlewareJWT");
  const UserServices= require("../services/user")(model)

  router.get('/user',validacionJWT("headers","authorization"), async function(req, res, next) {
    const {query}=req;
    let result = await UserServices.findUser(query)
    res.status(200).json(result);
  });

  router.post('/login',validacionJoi("body","loginUser"), async function(req, res, next) {
    const {body}=req;
    let result = await UserServices.loginUser(body)
    res.status(200).json(result);
  });

  router.post('/modify',validacionJWT("headers","authorization"),validacionJoi("body","modifyUser"),async function(req, res, next) {
    const {body}=req;
    let result = await UserServices.modifyUser(body)
    res.status(200).json(result);
  }); 

  router.get('/modify/:_id',validacionJWT("headers","authorization"),async function(req, res, next) {
    const {params}=req;
    let result = await UserServices.findOneUser(params)
    res.status(200).json(result);
  }); 

  router.post('/register',validacionJoi("body","registerUser"),async function(req, res, next) {
    const {body}=req;
    let result = await UserServices.CreateUser(body)
    res.status(200).json(result);
  });

  return router
}
