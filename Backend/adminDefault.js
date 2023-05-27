'use strict'

const Usuarios = require("./src/models/userModel");
const bcrypt = require('bcrypt');
// const { generateJWT } = require("./src/helpers/create-jwt");

//-------------------------------create-------------------------------------------

const defaultAdmin = async() => {
    try{
        const admin = new Admin();
        admin.user = 'ADMINB';
        admin.password = 'ADMINB';
        const adminEncontrado = await Admin.findOne({user: admin.user});
        if(adminEncontrado) return console.log('El administrador se ha instalado de fomra correcta')
        //Encripcion de contraseña
        admin.password = bcrypt.hashSync(admin.password, bcrypt.genSaltSync());
        user = await Admin.save();

        if(!user) return console.log('El admin no esta listo aun');
        return console.log('El admin ya esta listo')
    }catch(err){
        console.log(err);
    }
}

module.exports = {defaultUser}
