'use strict'

const Admin = require('../model/adminModel')
const User = require('../model/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


//------------------------------------create admin--------------------------------------

const createAdmin = async(req, res) =>{

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

}   


//------------------------------------------------------read admin--------------------------------------------------------------

const readAdmin = async(req, res) => {

  try{

      const admin = await Admin.find();
      if(!admin){
          res.status(410).send({
              msg: 'No hay administra'
          })
      }else{
        res.status(200).send({
                    msg: 'Administradores encontrados',
                    admin: admin
                  });
      }

  }catch(err){
    res.status(404).send({
      msg: 'No se pudo listar los admins',
      err,
    })
  }
}


//----------------------------------------------------------delete admin--------------------------------------------------------------

const deleteAdmin = async(req, res) => {

    try {
        const admin = req.params;
        const id = req.params.id;
        const result = await Admin.findByIdAndDelete(id);

        if(!admin){
          res.status(410).send({
            msg: "El administrador no existe, verificar si los datos son correctos"
        });
        }else{
          res.status(201).send({
              msg: "Se a eliminado el administador",
              admin: result
          });
      }
      } catch (error) {
        console.error('Error al eliminar la cuenta del administrador:', error);
        res.status(500).json({ mensaje: 'Error al eliminar la cuenta del administrador' });
      }
}

//---------------------------------------------------------update admin---------------------------------------------------------------------------------------------

const updateAdmin = async(req, res) => {

    try {
       
      const id = req.params.id;
        const adminEdit = {...req.body};

        adminEdit.password = adminEdit.password
        ? bcrypt.hashSync(adminEdit.password, bcrypt.genSaltSync())
        : adminEdit.password;

        const adminComplete = await Admin.findByIdAndUpdate(id, adminEdit, {new: true});

        if(!adminComplete){
          res.status(401).send({
              msg: "El administrador que desea actualizar, no existe"
          });
      }else{
          // res.status(410).send({
              return res.status(200).send({
                  message: 'Perfil actualizado correctamente', adminComplete,
              });
      }

      } catch (error) {
        console.error('Error al editar la cuenta del administrador:', error);
        res.status(500).json({ mensaje: 'Error al editar la cuenta del administrador' });
      }

}

//----------------------------------------------------viewDataAdmin admin------------------------------------------------------------------------

const viewDataAdmin = async(req, res) =>{
  const token = req.headers['token'];

    try {
        
      if (!token) {
        return res.status(401).json({ msg: 'Acceso no autorizado' });
      }
  
      const decodedToken = jwt.decode(token);
  
      if (!decodedToken) {
        return res.status(401).json({ msg: 'Token inválido' });
      }

      const adminId = decodedToken.adminId;

      const admin = await Admin.findById(adminId);

      
      if (!admin) {
        return res.status(404).json({ msg: 'Administrador no encontrado' });
      }

        res.status(201).json({
          msg: "Sis datos son:",
          admin
          });
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
        return res.status(401).json({ message: "Credenciales invalidas" });
      }
  
      // Verificar la contraseña
      const passwordValido = await bcrypt.compare(password, admin.password);
  
      if (!passwordValido) {
        return res.status(401).json({ message: "Contraseña incorrecta" });
      }
  
      const token = jwt.sign({adminId: admin._id}, 'mi_secreto', {
        expiresIn: '10h',
      })

      // Envío de mensaje de éxito
      res.json({
        message: "Administrador autenticado correctamente",
        token 
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error en el servidor" });
    }
  };

//-------------------------------------------movimientos ascendentes => descendientes---------------------------------------------------------------

/* Funcional */

const getAccountsByTransactionCount = async (req, res) => {
  const { order } = req.query;

  try {
    let sortOption = {};

    if (order === "asc") {
      sortOption = { $sort: { transactionCount: 1 } };
    } else if (order === "desc") {
      sortOption = { $sort: { transactionCount: -1 } };
    } else {
      return res.status(400).send({
        msg: "Orden no válido. Debe ser 'asc' o 'desc'",
      });
    }

    const accounts = await User.aggregate([
      {
        $lookup: {
          from: "transfers",
          localField: "transactions",
          foreignField: "_id",
          as: "transactions",
        },
      },
      {
        $addFields: {
          transactionCount: { $size: "$transactions" },
        },
      },
      sortOption,
    ]);

    res.status(200).send({
      msg: "Cuentas ordenadas por cantidad de movimientos",
      accounts,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      msg: "Error al obtener las cuentas",
      error: err.message,
    });
  }
};

  //-------------------------------------------------------exportaciones---------------------------------------------------------------------------

module.exports = {
    createAdmin,
    viewDataAdmin,
    updateAdmin,
    deleteAdmin,
    loginAdmin,
    getAccountsByTransactionCount,
    readAdmin
}






