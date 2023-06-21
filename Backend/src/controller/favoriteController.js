'use strict'

const Favorite = require('../model/favoritosModel');
const Users = require('../model/userModel');
const {generateJWT} = require('../helpers/create-jwt')

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
    
        const favorites = await Favorite.find();
    
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
        const token = req.header('token')
        const decoded = generateJWT(token)
        const favoriteU = req.body

        const updateF = await Favorite.findOneAndUpdate(favoriteU)
    
        if(!decoded){
            res.status(404).send({
                msg: "El token es no es valido"
        });
        }
        
        return res.status(200).json({
            msg: "Se actualizo de forma existo",
            favoriteUpdate: updateF,
            update: console.log(updateF)
        })
    }catch(err){
        (`Error al actualizar el curso` + err);
        console.log(err)
    }
}

//-------------------------------------------Delete Favorite-------------------------------------------------

const deleteFavorite = async(req, res) => {
    try{
        const token = req.header('token')
        const decoded = generateJWT(token)
        const favoriteD = req.body;
        const {acountNumber} = req.body;
        const existingAcount = await Favorite.findOne({acountNumber});
       

        const favoriteDelete = await Favorite.findOneAndDelete(favoriteD)

        if(!decoded){
            res.status(404).json({
                msg: "Lo siento, el token que ingresaste no es valido"
            })
        }

        if(!existingAcount){
            res.status(404).json({
                msg: "Lo siento, el numero de cuenta que ingresaste no es valido"
            })
        }

        return res.status(200).send({
            msg: "Se elimino la usuario en el apartado de favoritos",
            favoriteDelete: favoriteDelete
        })

    }catch(err){
        res.status(500).send({message: 'error en la peticion para eliminar el usuario favorito'});
        console.log(err)
        throw new Error('ocurrio un error al eliminar'); 
    }
}


module.exports = {
    createFavorite,
    readFavorite,
    updateFavorite,
    deleteFavorite
}





