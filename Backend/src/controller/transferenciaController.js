'use strict'

const User = require('../model/userModel');
const Transferencia = require('../model/transferenciasModel');


//-------------------------------------------create transferencias----------------------------------------------------

const createTransferencias = async(req, res) => {

    const {cuentaOrigen, cuentaDestino, saldo, monto, descripcion} = req.body;

    try{

        const transferencia = new Transferencia({
            cuentaOrigen: cuentaOrigen,
            saldo: saldo,
            cuentaDestino: cuentaDestino,
            monto: monto,
            descripcion: descripcion
        });

        const newTransferencia = await transferencia.save();

        console.log('Transferencia creada: ', {newTransferencia})

    }catch(err){

        console.log(err)
        console.log("Error al crear la transfencia")

    }

}










