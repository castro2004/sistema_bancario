'use strict'

const Favorite = require('../model/favoritosModel');
const Users = require('../model/userModel');

//--------------------------------------create favorite----------------------------------------------

const createFavorite = async(req, res) => {
    const {alias, acountNumber, acountType} = req.body;
 
    try{

        let favorite = await Users.findOne({acountNumber});

        const existingFavorite = await Favorite.findOne({ alias });
        const existingAcount = await Favorite.findOne({acountNumber});

        // if(!favorite){
        //     return res.status(401).json({
        //         msg: "No se han agregado cuentas como favoritos",
        //         ok: false,
        //         favorite: favorite
        //     });
        // }

        if (existingFavorite) {
            return res.status(401).json({
                msg: "Ya existe un usuario favorito con este alias",
                ok: false,
                favorite: existingFavorite
            });
        }

        if (existingAcount) {
            return res.status(401).json({
                msg: "Ya existe un usuario favorito con este numero de cuenta",
                ok: false,
                favorite: existingAcount
            });
        }

        favorite = new Favorite(req.body);
        favorite = await favorite.save();

        return res.status(200).send({
             message: `El usuario se agrego como favorito`,
            ok: true,
            favorite: favorite,
        })

    }catch(err){
        console.log(err)
        throw new Error(err)
    }

}

//-----------------------------------------list favorite------------------------------------------------

const readFavorite = async(req, res) => {

try{

    const favorites = await Favorite.findById();

        if(!favorites){
            res.status(400).send({
                msg: 'No hay cuentas favoritas agregadas'
            });
        }else{
            res.status(200).send({
                msg: "Tus favoritos son:",
                favoritos: favorites
                })
        }

    }catch(err){
        console.log(err)
        throw new Error(err)
    }

}

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


module.exports = {
    createFavorite,
    readFavorite,
    updateFavorite,
    deleteFavorite
}





