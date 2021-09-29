module.exports = function(model) {

    const express = require('express');
    const router = express.Router();
    const BookServices= require("../services/books")(model)
    var validacionJWT=require("../middleware/middlewareJWT");


    /* GET users listing. */
    router.get('/',validacionJWT("headers","authorization") ,async function(req, res, next) {
        const {query}=req;
        let result = await BookServices.findBooks(query)
        let limitResult=result.length
        res.status(200).json({limitResult,"data":result});
    });
    router.post('/', validacionJWT("headers","authorization"),async function(req, res, next) {
        const {body}=req;
        let result = await BookServices.findOneBook(body)
        res.status(200).json(result);

    });


    return router
}


