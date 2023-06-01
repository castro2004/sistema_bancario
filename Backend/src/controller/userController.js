'use strict'

const User = require('../model/userModel')
const Transfers = require('../model/transferenciasModel');
const bcrypt = require('bcrypt')

//-----------------------------------------------------create User------------------------------------------------

const createUser = async(req, res) => {
    const {name, email, password} = req.body
    try{

        let user = await User.findOne({email});
        let userAcount = await User.findOne({acountNumber})
        let userDPI = await User.findOne({dpi})
        let userCell = await User.findOne({cellPhone})

        if(user){
            return res.status(400).send({
                msg: "Un usuario ya se a registrado con este correo",
                ok: false,
                user: user
            });
        }

        if(userAcount){
            return res.status(400).send({
                msg: "Este numero de cuenta ya se le asigno a un usuario",
                ok: false,
                user: userAcount
            })
        }

        if(userDPI){
            return res.status(400).send({
                msg: "Un usuario ya se a registrado con este dpi",
                ok: false,
                userDPI: userDPI
            })
        }

        if(userCell){
            return res.status(400).send({
                msg: "Un usuario ya se registro con este numero de telefono",
                ok: false,
                userDPI: userDPI
            })
        }

        user = new User(req.body);
        
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(password, salt);

        user = await user.save();

        res.status(210).send({
            msg: `El usuario ${name} se creo de forma exitosa`,
            ok: true,
            user: user
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

//------------------------------------------------------list---------------------------------------------------

/*const readUser = async(req, res) =>{
    try{

        const user = await User.find();
        if(!user){
            res.status(410).send({
                msg: 'No hay usuarios disponibles'
            });
        }else{
            res.status(200).send({usuarios_disponibles: user});
        }

    }catch(err){

        console.log(err);
        res.status(510).send({
            ok: false,
            msg: 'Error al listar el usuario',
            error: err
        });

    }
}*/

//-------------------------------------------update User------------------------------------------------------------------

const updateUser = async(req, res) => {
    try{
        
        const id = req.params.id;
        const userEdit = {...req.body};
        
        userEdit.password = userEdit.password
        ? bcrypt.hashSync(userEdit.password, bcrypt.genSaltSync())
        : userEdit.password;

        const userComplete = await User.findByIdAndUpdate(id, userEdit, {new: true});

        if(!userComplete){
            res.status(401).send({
                msg: "El usuario que desea actualizar, no existe"
            });
        }else{
            // res.status(410).send({
                return res.status(200).send({
                    message: 'Perfil actualizado correctamente', userComplete,
                });
        }
    
    }catch(err){

        console.log(err);
        res.status(510).send({
            ok: false,
            msg: 'Error al actualizar el usuario',
            error: err
        });

    }
}

//-------------------------------------------------delete User------------------------------------------

const deleteUser = async(req, res) =>{

    try{
        
        const user = req.params;
        const id= req.params.id;
        const result = await User.findByIdAndDelete(id);
        
        if(!user){
            res.status(410).send({
                msg: "El usuario no existe, verificar si los datos son correctos"
            });
        }else{
            res.status(201).send({
                msg: "Se a eliminado el ususario",
                user: result
            });
        }
    }catch(err){

        console.log(err);
        res.status(510).send({
            ok: false,
            msg: 'Error al actualizar el usuario',
            error: err
        });

    }


}

//------------------------------------------------login-----------------------------------------------------------------

const loginUser = async (req, res) => {
    const { username, password } = req.body;
    
        try {
        // Buscar al usuario en la base de datos
            const user = await User.findOne({ username });
        
            // Verificar si el usuario existe
            if (!user) {
                return res.status(401).json({ message: "Usuario no encontrado" });
            }
        
            // Verificar la contraseña
            const passwordValido = await bcrypt.compare(password, user.password);
        
            if (!passwordValido) {
                return res.status(401).json({ message: "Contraseña incorrecta" });
            }
        
            // Envío de mensaje de éxito
            res.json({ message: "Has ingresado de forma correcta" });
        } catch (error) {
        console.log(error);

        res.status(500).json({ message: "Error en el servidor" });
        }
    };

//-----------------------------------------------------visualizar datos del usuario--------------------------------------------------------------

/* Para el usuario pueda visualizar unicamente sus propios datos */

const viewUserData = async (req, res) => {
    const { username } = req.params;

    try {
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(404).send({
                msg: "Usuario no encontrado",
            });
        }

        res.status(200).send({
            msg: "Datos del usuario obtenidos exitosamente",
            userData: user,
        });
    } catch (err) {
        console.log(err);
        res.status(500).send({
            msg: "Error al obtener los datos del usuario",
        });
    }
};

//--------------------------------------------visualizacion de saldo actual---------------------------------------------------------

/* Ver el balance actual del usuario */

const viewBalance = async (req, res) => {
    try {
      // Obtener el ID del usuario autenticado desde la información proporcionada por el cliente
      const userId = req.userId;
  
      // Buscar el usuario en la base de datos por su ID
      const user = await User.findById(userId);
  
      // Verificar si el usuario existe
      if (!user) {
        return res.status(404).json({ msg: 'Usuario no encontrado' });
      }
  
      // Devolver el balance del usuario
      res.json({ balance: user.balance });
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: 'Error al obtener el balance del usuario' });
    }
  };


//------------------------------------------------------Historial de Transacciones------------------------------------------------

const historyTransaction = async(req, res) => {
    try{
        const userId = req.params.id;
        const user = await User.findById(userId).populate('transactions')

        if(!user){
            return res.status(404).json({
                msg: "Usuario no encontrado"
            });
        } else {
            res.status(200).json({
                msg: 'Su historia de transacciones es:',
                transactionHistoty: user.transactions,
            })
        }
    }catch(err){
        console.log(err)
    }
}

//----------------------------------------------------exportaciones------------------------------------------------


module.exports = {
    createUser,
    //readUser,
    updateUser,
    deleteUser,
    loginUser,
    viewUserData,
    viewBalance,
    historyTransaction
}




