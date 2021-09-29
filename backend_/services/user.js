module.exports = function(model) {
    const crypto = require('crypto');
	const md5 = require ("md5");
    const request = require('request');
    const functionJWT=require("./jwt")
    const time=new Date().getTime();
    const UserServices={
        "findUser": async ({limit=20 , skip = 0})=>{
            try {
                limit=parseInt(limit)
                skip=parseInt(skip)
                let user =await model.searchUsers({}).limit(limit).skip(skip)
                return {user}
            } catch (error) {
                return {"user":[]}
            } 
        },
         "findOneUser": async (params)=>{
            try {
                let user =await model.searchUser({"_id":params._id})
                return user
            } catch (error) {
                return {"error":"error servidor"}
            } 
        },
        "loginUser": async ({username,password})=>{
            if(!username || !password ) 
                return {"error":"datos incompletos"}
            try {
                password=crypto.createHash('md5').update(password).digest("hex");
                let user =await model.searchUser({username,password}).lean()
                let firma= functionJWT.firmar(user)
                if(!firma)
                    return {"error":"Credenciales invalidas"}
                delete (user.password)
                return {"token":firma, "user":user }
            } catch (error) {
                return {"error":"Error en el servidor"}
            } 
        },
         "modifyUser": async ({libro,user,estado})=>{
            if(!estado || !libro ) 
                return {"error":"datos incompletos"}
            try {


                let update={}
                let estados=["porhacer","leyendo","leido","abandonado"]
                estados.forEach( (est)=> {
                    if(estado==est){
                        update["$addToSet"]={ }
                        update["$addToSet"][est]=libro
                    }else{
                        if(! update["$pull"] ) 
                            update["$pull"]={ }
                        update["$pull"][est]=libro
                    }
                })
                let resp =await model.modifyUser({"_id":user}, update  )
                return resp

            } catch (error) {
                if(error) console.log(error)
                return {"error":"Error en el servidor"}
            } 
        },
        "CreateUser": async ({username,password,name,lastname}) => {
            password=crypto.createHash('md5').update(password).digest("hex");
            try {
                let exist=await model.searchUser({username})
                if(exist)
                    return {error:"exist"}
                let resp =await model.modifyUser({"_id":model.generateId()},{username,password,name,lastname,img:`https://source.unsplash.com/random/200x200?sig=${time}` } )
                return resp
            } catch (error) {
                return  null;
            }
        }
    }
    return UserServices
}
