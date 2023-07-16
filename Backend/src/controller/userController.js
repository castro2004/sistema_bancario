'use strict'

const User = require('../model/userModel')
const Transfers = require('../model/transferenciasModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const adminModel = require('../model/adminModel');

//-----------------------------------------------------create User------------------------------------------------

// * FUNCIONAL
// ? FUNCION PARA CREAR EL USUARIO 

const createUser = async(req, res) => {
    const {name, email, password, dpi, accountNumber, cellPhone, incomeMonth} = req.body
    try{

        let user = await User.findOne({email});
        let userAcount = await User.findOne({accountNumber})
        let userDPI = await User.findOne({dpi})
        let userCell = await User.findOne({cellPhone})
        let userIncomeMonth = await User.findOne({incomeMonth})

        if(userIncomeMonth > 100){
            return res.status(400).send({
                msg: "No se logro crear el usuario por el motivo que:",
                msg: "El ingreso el usuario debe ser mas de 100 quetzales por mes",
                ok: false,
                user: user
            })
        }

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

//-------------------------------------------update User------------------------------------------------------------------

// * FUNCIONAl 
// ? FUNCION PARA ACTUALIZAR EL USUARIO */

const updateUser = async(req, res) => {

  const {token, ...userData} = req.body;

    try{
        
        if(!token){
          return res.status(401).json({msg: 'Acceso no autorizado'});
        }

        const user = await User.findOneAndUpdate({token}, userData, {new: true});
        
        if(!user){
          return res.status(404).json({
            msg: 'Usuario no encontrado de forma exitosa',
          });
        }else {
          return res.status(202).json({
            msg: 'Usuario actualizado exitosamente',
          })
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

// * FUNCIONAL
// ? FUNCION ELIMINAR USUARIO 

const deleteUser = async(req, res) =>{

  const {token} = req.body;

    try{
        
      if(!token){
        return res.status(401).json({msg: 'Acceso no autorizado'});
      }  

      const user = await User.findOneAndDelete({token})

      if(!user){
        return res.status(404).jsons({msg: 'Usuario no encontrador'})
      }else{
        return res.status(200).json({
          msg: 'Usuario eliminado de forma exitosa'
        })
      }

    }catch(err){

        console.log(err);
        res.status(510).send({
            ok: false,
            msg: 'Error al actualizar el usuario',
            error: eliminar
        });

    }


}

//------------------------------------------------login-----------------------------------------------------------------

// * FUNCIONAL
// ? FUNCION PARA QUE EL USUARIO PUEDA LOGUEARSE 

const loginUser = async (req, res) => {
    const { username, password } = req.body;
  
    try {
      // Buscar al usuario por el nombre de usuario
      const user = await User.findOne({ username });
  
      // Verificar si el usuario existe
      if (!user) {
        return res.status(401).json({ error: 'Credenciales inválidas' });
      }
  
      // Verificar la contraseña
      const isPasswordValid = await bcrypt.compare(password, user.password);
  
      if (!isPasswordValid) {
        return res.status(401).json({ error: 'Credenciales inválidas' });
      }
  
      // Generar el token de autenticación
      const token = jwt.sign({ userId: user._id }, 'mi_secreto', {
        expiresIn: '10h',
      });

      user.token = token;
      await user.save();
  
      res.json({
        message: "Usuario autenticado correctamente",
        token,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Error al realizar el login' });
    }
  };

//-----------------------------------------------------visualizar datos del usuario--------------------------------------------------------------

// * FUNCIONAL
// ? FUNCION PARA QUE EL USUARIO PUEDA VISUALIZAR SUS DATOS 

const viewUserData = async (req, res) => {
    const token = req.headers['token'];
  
    try {
      if (!token) {
        return res.status(401).json({ msg: 'Acceso no autorizado' });
      }
  
      const user = await User.findOne({token});

      if(!user){
        return res.status(404).json({msg: 'Usuario no encontrado'});
      }else{
        res.status(200).json({
          msg: 'Sus datos son:',
          user
        })
      }

    } catch (error) {
      console.error('Error al obtener los datos del usuario:', error.message);
      res.status(500).json({ msg: 'Error en el servidor' });
    }
  };
  
//--------------------------------------------visualizacion de saldo actual---------------------------------------------------------

// * FUNCIONAL
// ? FUNCION PARA QUE EL USUARIO PUEDA VISUALIZAR SU BALANCE ACTUAL 

const viewBalance = async (req, res) => {

    const token = req.headers['token'];

    try {
        if (!token) {
          return res.status(401).json({ msg: 'Acceso no autorizado' });
        }
    
        const decodedToken = jwt.decode(token);
    
        if (!decodedToken) {
          return res.status(401).json({ msg: 'Token inválido' });
        }
    
        const userId = decodedToken.userId;
    
        const user = await User.findById(userId);
    
        if (!user) {
          return res.status(404).json({ msg: 'Usuario no encontrado' });
        }
    
        res.status(200).json({ msg: 'Su balance es:', balance: user.balance });
      } catch (error) {
        console.error('Error al obtener el balance del usuario:', error.message);
        // Manejar el error según tus necesidades
      }
  };


//------------------------------------------------------Historial de Transacciones------------------------------------------------

// * FUNCIONAL
// ? FUNCION PARA QUE EL USUARIO PUEDA VISUALIZAR EL HISTORIAL DE SUS TRANSACCIONES 

const historyTransaction = async (req, res) => {
    
  const token = req.headers['token']
  
    try{

      if (!token) {
        return res.status(401).json({ msg: 'Acceso no autorizado' });
      }
    
      const decodedToken = jwt.decode(token);
    
        if (!decodedToken) {
          return res.status(401).json({ msg: 'Token inválido' });
        }

        const userId = decodedToken.userId;
    
        const user = await User.findById(userId);
    
        if (!user) {
          return res.status(404).json({ msg: 'Usuario no encontrado' });
        }

        const transactionHistory = await user.historyTransaction();

        return res.json(transactionHistory);

    }catch(err){
        console.log(err)
    }
  };

  const menuUser = (req, res) => {
    res.json({ message: 'Este es su menú' });
  };


  const createFavorite = async (req, res) => {

    const { alias, accountNumber } = req.body;
  
    try {
      const token = req.headers['token'];
  
      if (!token) {
        return res.status(401).json({ msg: 'Acceso no autorizado' });
      }
  
      const user = await User.findOne({ token });
  
      if (!user) {
        return res.status(404).json({ msg: 'Usuario no encontrado' });
      }
  
      const existingFavorite = user.favorites.find((favorite) => favorite.alias === alias || favorite.accountNumber === accountNumber);
  
      if (existingFavorite) {
        return res.status(401).json({ msg: 'Ya existe un favorito con este alias o número de cuenta' });
      }
  
      const favorite = {
        alias,
        accountNumber
      };
  
      user.favorites.push(favorite);
      await user.save();
  
      res.status(200).json({ msg: 'Favorito creado exitosamente', favorite });
    } catch (error) {
      console.error('Error al crear el favorito:', error);
      res.status(500).json({ msg: 'Error al crear el favorito' });
    }
  };
  

const viewFavorite = async(req, res) =>{
  const token = req.headers['token'];

  try{

    if(!token){
      return res.status(401).json({ msg: 'Acceso no autorizado' });
    }

    const user = await User.findOne({token});
    const favorites = user.favorites;

    if (!user) {
      throw new Error('Token inválido');
    }else{
      res.status(200).json({
        msg: 'Datos del administrador:',
        favorites
    })
  }

}catch(err){
  console.error('Error al obtener los favoritos:', err);
  res.status(500).json({ message: 'Error al obtener los favoritos' });
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
    historyTransaction,
    menuUser,
    createFavorite,
    viewFavorite
}




