'use strict'

const Admin = require("./src/model/adminModel");
const bcrypt = require('bcrypt');
// const { generateJWT } = require("./src/helpers/create-jwt");

//-------------------------------create-------------------------------------------

const defaultAdmin = async() => {
    try{
        const admin = new Admin();
        admin.user = 'ADMINB';
        admin.password = 'ADMINB';
        admin.rol = 'ADMIN';
        admin.dpi = '48646848464';
        admin.cellPhone = '16785425';
        admin.email = 'admin@admin.com';
        const adminEncontrado = await Admin.findOne({admin: admin.user});
        if(adminEncontrado) return console.log('El administrador se ha instalado de fomra correcta')
        //Encripcion de contraseña
        admin.password = bcrypt.hashSync(admin.password, bcrypt.genSaltSync());
        await admin.save();
        if(!admin) return console.log('El admin no esta listo aun');
        return console.log('El admin esta listo')
    }catch(err){
        console.log(err);
    }
}

module.exports = {defaultAdmin}
