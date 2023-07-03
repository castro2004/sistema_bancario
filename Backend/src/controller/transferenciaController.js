'use strict'

const Users = require('../model/userModel');
const Transferencia = require('../model/transferenciasModel');


//-------------------------------------------create transferencias----------------------------------------------------

const createTransferencias = async(req, res) => {

    const {cuentaOrigen, cuentaDestino, saldo, monto, descripcion} = req.body;

    try {
        let usuarioOrigen = await Users.findOne({ cuentaOrigen });
        let usuariosDestino = await Users.findOne({ cuentaDestino });
    
        if (!usuarioOrigen) {
          return res.status(404).send({
            msg: "El número de cuenta de origen no existe, verificar los datos",
          });
        }
    
        if (!usuariosDestino) {
          return res.status(404).send({
            msg: "El número de cuenta de destino no existe, verificar los datos",
          });
        }
    
        if (monto > 10000) {
          return res.status(400).send({
            msg:
              "No se puede realizar la transferencia. El monto excede los 10000 quetzales",
          });
        }
    
        if (monto > usuarioOrigen.balance) {
          return res.status(404).send({
            msg: "El monto es mayor a la cantidad de su saldo actual en su cuenta bancaria",
          });
        }
    
        usuarioOrigen.balance - monto;
        usuariosDestino.balance + monto;
    
        await usuarioOrigen.save();
        await usuariosDestino.save();
    
        await Users.updateOne(
          { acountNumber: cuentaOrigen },
          { $inc: { balance: -monto } }
        );
        await Users.updateOne(
          { acountNumber: cuentaDestino },
          { $inc: { balance: monto } }
        );
    
        const transferencia = new Transferencia({
          cuentaOrigen: cuentaOrigen,
          saldo: saldo,
          date: date,
          cuentaDestino: cuentaDestino,
          monto: monto,
          descripcion: descripcion,
        });
    
        const newTransferencia = await transferencia.save();

        usuarioOrigen.transactions.push(newTransferencia);
        await usuarioOrigen.save();
    
        res.status(210).send({
          msg: "Transferencia creada",
          ok: true,
          transferencia: newTransferencia,
        });
      } catch(err){

        console.log(err)
        console.log("Error al crear la transfencia")

    }

}


//------------------------------------------------------------exportaciones------------------------------------------------------------------------------------------

module.exports = {
    createTransferencias
}





