'use strict'

const Favorite = require('../model/favoritosModel');
const User = require('../model/userModel');

//--------------------------------------create favorite----------------------------------------------

// const createFavorite = async (req, res) => {
//     const { token, alias, accountNumber, accountType } = req.body;
  
//     try {
//       const user = await User.findOne({ token });
  
//       if (!user) {
//         return res.status(404).json({ msg: 'Usuario no encontrado' });
//       }
  
//       const existingFavorite = await Favorite.findOne({ alias, user: user._id });
//       const existingAccount = await Favorite.findOne({ accountNumber, user: user._id });
  
//       if (existingFavorite) {
//         return res.status(401).json({
//           msg: 'Ya existe un usuario favorito con este alias',
//           ok: false,
//           favorite: existingFavorite
//         });
//       }
  
//       if (existingAccount) {
//         return res.status(401).json({
//           msg: 'Ya existe un usuario favorito con este número de cuenta',
//           ok: false,
//           favorite: existingAccount
//         });
//       }
  
//       const favorite = new Favorite({
//         alias,
//         accountNumber,
//         accountType,
//         user: user._id
//       });
  
//       await favorite.save();
  
//       return res.status(200).json({
//         message: 'El usuario se agregó como favorito',
//         ok: true,
//         favorite
//       });
//     } catch (err) {
//       console.log(err);
//       throw new Error(err);
//     }
//   };

  

//-----------------------------------------list favorite------------------------------------------------

const readFavorite = async (req, res) => {
    const { token } = req.body;
  
    try {
      if (!token) {
        return res.status(401).json({ msg: 'Acceso no autorizado' });
      }
  
      const user = await Users.findOne({ token });
  
      if (!user) {
        return res.status(404).json({ msg: 'Usuario no encontrado' });
      }
  
      const favorites = await Favorite.find({ user: user._id });
  
      if (!favorites || favorites.length === 0) {
        return res.status(400).json({ msg: 'No hay cuentas favoritas agregadas' });
      }
  
      res.status(200).json({ msg: 'Tus favoritos son:', favoritos: favorites });
    } catch (error) {
      console.error('Error al obtener los favoritos:', error);
      res.status(500).json({ message: 'Error al obtener los favoritos' });
    }
  };
  
  

//------------------------------------------Update Favorite--------------------------------------------------

const updateFavorite = async(req, res) => {
    try{
        let editFavorite = req.body;
        const id = req.params.id;
        const favoriteModify = Favorite.findById(id);
        if(!favoriteModify){
            res.status(202).send({
                msg: "Este id no existe, verificar los datos"
            });
        }else{
            const favoriteComplete = await Favorite.findByIdAndUpdate(id, favorite_update, {new: true});
            res.status(200).send({
                msg: "El usuario favorito se actualizo exitosamente:",
                favoriteComplete
            });
        }
    }catch(err){
        (`Error al actualizar el curso` + err);
    }
}

//-------------------------------------------Delete Favorite-------------------------------------------------

const deleteFavorite = async(req, res) => {
    try{
        const id = req.params.id;
        const result = await Favorite.findByIdAndDelete(id);

        if(!id){
            res.status(201).send({
                msg: "El id que ingresaste parece ser que no es existe",
                msg: "Verifique sus datos"
            })
        }

        res.status(200).send({
            msg: "El curso se elimino de forma exitosa",
            result: result
        })
    }catch(err){
        res.status(500).send({message: 'error en la peticion para eliminar el usuario favorito'});
        throw new Error('ocurrio un error al eliminar'); 
    }
}


// module.exports = {
//     createFavorite,
//     readFavorite,
//     updateFavorite,
//     deleteFavorite
// }





