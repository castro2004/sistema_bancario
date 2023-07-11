const jwt = require('jsonwebtoken');
require('dotenv').config();
const Admin = require('../model/adminModel')
const secret = process.env.SECRET_KEY;

const generateJWT = async(uId, name, email) =>{
    const payload = {uId, name, email};
    try{
        const token = await jwt.sign(payload, secret, {expiresIn: "1h"});
        return token;
    }catch(error){
        throw new Error(error + "No se pudo generar el token correctamente")
    }
}

module.exports = {generateJWT}


const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization')
        const user = await Admin.findOne({ where: {id: id , token: token} })        

        if (!user) {
            throw new Error()
        }

        req.token = token
        req.user = user
        next()
        
    } catch (e) {
        res.status(401).send({ error: 'Please authenticate.' })
    }
}

module.exports = {auth}
