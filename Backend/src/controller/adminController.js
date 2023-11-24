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

const deleteAdmin = async (req, res) => {
  const { token } = req.body;

  try {
    if (!token) {
      return res.status(401).json({ msg: 'Acceso no autorizado' });
    }

    const admin = await Admin.findOneAndDelete({ token });

    if (!admin) {
      return res.status(404).json({ msg: 'Administrador no encontrado' });
    } else {
      return res.status(200).json({
        msg: 'Administrador eliminado correctamente',
      });
    }
  } catch (error) {
    console.error('Error al eliminar el administrador:', error);
    return res.status(500).json({ message: 'Error al eliminar el administrador' });
  }
};

//---------------------------------------------------------update admin---------------------------------------------------------------------------------------------

const updateAdmin = async (req, res) => {
  const { token, ...adminData } = req.body;

  try {
    if (!token) {
      return res.status(401).json({ msg: 'Acceso no autorizado' });
    }

    const admin = await Admin.findOneAndUpdate({ token }, adminData, { new: true });

    if (!admin) {
      return res.status(404).json({ msg: 'Administrador no encontrado' });
    } else {
      return res.status(200).json({
        msg: 'Administrador actualizado correctamente',
        admin,
      });
    }
  } catch (error) {
    console.error('Error al editar la cuenta del administrador:', error);
    res.status(500).json({ mensaje: 'Error al editar la cuenta del administrador' });
  }
};

//----------------------------------------------------viewDataAdmin admin------------------------------------------------------------------------

const viewDataAdmin = async (req, res) => {
  const token = req.headers['token'];

  try {
    if (!token) {
      return res.status(401).json({ msg: 'Acceso no autorizado' });
    }

    const admin = await Admin.findOne({ token });

    if (!admin) {
      return res.status(404).json({ msg: 'Administrador no encontrado' });
    }else{
      res.status(200).json({
        msg: 'Datos del administrador:',
        admin
      });
    }

    console.log(admin)
    
  } catch (error) {
    console.error('Error al buscar el administrador:', error);
    res.status(500).json({ mensaje: 'Error al buscar el administrador' });
  }
};



//----------------------------------------------login administrador-------------------------------------------------------------------

const loginAdmin = async (req, res) => {
  const { user, password } = req.body;

  try {
    // Buscar al administrador en la base de datos
    const admin = await Admin.findOne({ user });

    // Verificar si el administrador existe
    if (!admin) {
      return res.status(401).json({ message: "Credenciales inválidas" });
    }

    // Verificar la contraseña
    const passwordValido = await bcrypt.compare(password, admin.password);

    if (!passwordValido) {
      return res.status(401).json({ message: "Contraseña incorrecta" });
    }

    const token = jwt.sign({ adminId: admin._id }, "mi_secreto", {
      expiresIn: "10h",
    });

    // Guardar el token en el cuerpo del administrador
    admin.token = token;
    await admin.save();

    // Envío de mensaje de éxito
    res.json({
      message: "Administrador autenticado correctamente",
      token,
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
    getAccountsByTransactionCount
}






