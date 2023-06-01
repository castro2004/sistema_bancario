'use strict'

const User = require('../model/userModel');
const Transferencia = require('../model/transferenciasModel');


//-------------------------------------------create transferencias----------------------------------------------------

const createTransferencias = async(req, res) => {

    const {cuentaOrigen, cuentaDestino, saldo, monto, descripcion} = req.body;

    try{

        let transfenciasOrigen = await Transferencia.findOne({cuentaOrigen})
        let transfenciasDestino = await Transferencia.findOne({cuentaDestino})

        const user = User.findOne({acountNumber: cuentaOrigen})
        const balance = user.balance;

        const userOrigen = await User.findOne({ acountNumber: cuentaOrigen });
        const userDestino = await User.findOne({ acountNumber: cuentaDestino });
        
        if (!userOrigen) {
            return res.status(404).send({
                msg: "La cuenta de origen no existe, verificar los datos",
            });
        }
        
        if (!userDestino) {
            return res.status(404).send({
                msg: "La cuenta de destino no existe, verificar los datos",
            });
        }

         if(!transfenciasOrigen){
             return res.status(404).send({
                 msg: "El numero de cuenta de origen no existe, verificar los datos",
             });
         }

         if(!transfenciasDestino){
             return res.status(404).send({
                 msg: "El numero de cuenta de Destino no existe, verificar los datos",
             })
         }

        if(monto > 10000){
            return res.status(400).send({
                msg: "No se logrado realizar su transferencias",
                msg: "El motivo es que a excedido el limite de dinero para una transferencia"
            });
        }

        if(monto > balance){
            return res.status(404).send({
                msg: "Que el monto es mayor a la cantidad de su saldo actual en su cuneta bancaria"
            })
        }

        transfenciasOrigen.acountNumber  -= monto;
        transfenciasDestino.acountNumber  += monto;

        await transfenciasOrigen.save()
        await transfenciasDestino.save()

        await User.updateOne(
            { acountNumber: cuentaOrigen },
            { $inc: { balance: -monto } }
        );
        await User.updateOne(
            { acountNumber: cuentaDestino },
            { $inc: { balance: monto } }
        );

        const transferencia = new Transferencia({
            cuentaOrigen: cuentaOrigen,
            saldo: saldo,
            cuentaDestino: cuentaDestino,
            monto: monto,
            descripcion: descripcion
        });

        const newTransferencia = await transferencia.save();

        res.status(210).send({
            nsg: 'Transferencia creada',
            ok: true,
            transferencia: newTransferencia
        })

    }catch(err){

        console.log(err)
        console.log("Error al crear la transfencia")

    }

}

//------------------------------------------------------------exportaciones------------------------------------------------------------------------------------------

module.exports = {
    createTransferencias
}