'use strict'

const Admin = require('../model/adminModel')
const bcrypt = require('bcrypt')


//------------------------------------create admin--------------------------------------

const createAdmin = async(req, res) =>{

   if(req.user.rol === 'ADMIN'){

    const {user, password} = req.body;

    try{

        let admin = await Admin.findOne({user});

        if(admin){
            return res.status(400).send({
                msg: "Un admin ya se a registrado con este nombre de usuario, utiliza otro nombre de usuario",
                ok: false,
                admin: admin
            });
        }

        admin = new Admin(req.body);

        const salt = bcrypt.genSaltSync();
        admin.password = bcrypt.hashSync(password, salt);

        admin = await admin.save()

        res.status(210).send({
            msg: `El administrador ${user} se creo de forma exitosa`,
            ok: true,
            admin: admin
        });

    }catch(err){
        console.log(err)
        res.status(510).send({
            ok: false,
            msg: `No se a podido crear el usuario: ${name}`,
            error: err,
        });
    }

   }else{
    res.status(200).send({
        msg: 'No tienes permisos para realizar esta acción ;D'
    })
   }

}   


//------------------------------------------------------read admin--------------------------------------------------------------

// const readAdmin = async(req, res) => {

//     try{

//         const admin = await Admin.find();
//         if(!admin){
//             res.status(410).send({
//                 msg: 'No hay administra'
//             })
//         }

//     }catch(err){

//     }

// }


//----------------------------------------------------------delete admin--------------------------------------------------------------

const deleteAdmin = async(req, res) => {

    try {
        const idAdministrador = req.params.id;
        const admin = await Admin.findById(idAdministrador);
    
        if (!admin) {
          return res.status(404).json({ mensaje: 'Administrador no encontrado' });
        }
    
        const userAdminAutenticado = req.headers.authorization; // Obtener el usuario del administrador autenticado desde el encabezado de autorización
    
        if (admin.user !== userAdminAutenticado) {
          return res.status(403).json({ mensaje: 'No tienes permiso para eliminar esta cuenta' });
        }
    
        // Si el usuario del administrador coincide con el usuario del administrador autenticado, se procede a eliminar la cuenta
        await Admin.findByIdAndDelete(idAdministrador);
        res.json({ mensaje: 'Cuenta eliminada correctamente' });
      } catch (error) {
        console.error('Error al eliminar la cuenta del administrador:', error);
        res.status(500).json({ mensaje: 'Error al eliminar la cuenta del administrador' });
      }
}

//---------------------------------------------------------update admin---------------------------------------------------------------------------------------------

const updateAdmin = async(req, res) => {

    try {
        const idAdministrador = req.params.id;
        const administrador = await Admin.findById(idAdministrador);
    
        if (!administrador) {
          return res.status(404).json({ mensaje: 'Administrador no encontrado' });
        }
    
        const idAdminAutenticado = req.headers.authorization; // Obtener el ID del administrador autenticado desde el encabezado de autorización
    
        if (idAdministrador !== idAdminAutenticado) {
          return res.status(403).json({ mensaje: 'No tienes permiso para editar esta cuenta' });
        }
    
        // Si el ID del administrador coincide con el ID del administrador autenticado, se procede a realizar la edición
        // Aquí puedes agregar el código para realizar la edición de la cuenta del administrador
    
        res.json({ mensaje: 'Cuenta editada correctamente' });
      } catch (error) {
        console.error('Error al editar la cuenta del administrador:', error);
        res.status(500).json({ mensaje: 'Error al editar la cuenta del administrador' });
      }

}

//----------------------------------------------------search admin------------------------------------------------------------------------

const searchAdmin = async(req, res) =>{
    try {
        const user = req.params.user;
        const admin = await Admin.findOne({ user: user });
    
        if (!admin) {
          return res.status(404).json({ mensaje: 'Administrador no encontrado' });
        }
        res.json(admin);
      } catch (error) {
        console.error('Error al buscar el administrador:', error);
        res.status(500).json({ mensaje: 'Error al buscar el administrador' });
      }
}

//----------------------------------------------login administrador-------------------------------------------------------------------

const loginAdmin = async (req, res) => {
    const { user, password } = req.body;
  
    try {
      // Buscar al administrador en la base de datos
      const admin = await Admin.findOne({ user });
  
      // Verificar si el administrador existe
      if (!admin) {
        return res.status(401).json({ message: "Usuario no encontrado" });
      }
  
      // Verificar la contraseña
      const passwordValido = await bcrypt.compare(password, admin.password);
  
      if (!passwordValido) {
        return res.status(401).json({ message: "Contraseña incorrecta" });
      }
  
      // Envío de mensaje de éxito
      res.json({ message: "Administrador autenticado correctamente" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error en el servidor" });
    }
  };

//-------------------------------------------------------exportaciones---------------------------------------------------------------------------

module.exports = {
    createAdmin,
    searchAdmin,
    updateAdmin,
    deleteAdmin,
    loginAdmin
}






