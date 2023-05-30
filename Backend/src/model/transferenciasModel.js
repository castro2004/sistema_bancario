'use strict'

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const transferenciasSchema = new mongoose.Schema({
    cuentaOrigen: {
        type: Schema.Types.String,
        ref: 'User',
        require: true,
        default: function(){
            return this.cuentaOrigen.acountNumber;
        }
    },
    saldo: {
        type: Schema.Types.Number,
        ref: 'User',
        require: true,
        default: function(){
            return this.saldo.balance;
        }
    },
    cuentaDestino: {
        type: Schema.Types.String,
        ref: 'User',
        require: true,
    },
    monto : {
        type: Number,
        require: true
    }, 
    descripcion: {
        type: String,
        require: false
    }
});

module.exports = mongoose.model('Transfers', transferenciasSchema);














