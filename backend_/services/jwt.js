const secretJWT=process.env.SECRET_JWT ||"sin"
const timeJWT=process.env.TIME_JWT || "sin"
const jwt = require('jsonwebtoken');
module.exports ={
    firmar:function(user){
        if(!user || !user.username || !user.password)
            return null
        return jwt.sign({ "username": user.username, "password": user.password }, secretJWT, { expiresIn: timeJWT });
    },
    validar:function(token){
        if(!token) return null;
        return jwt.verify(token,secretJWT );
    }
}