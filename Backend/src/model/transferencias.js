'use strict'

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const transferenciasSchema = new mongoose.Schema({
    cuentaOrigen: {
        type: Schema.Types.String,
        ref: 'User',
        require: true
    },
    cuentaDestino: {
        type: Schema.Types.String,
        ref: 'User',
        require: true
    },
    monto : {
        type: Number,
        require: true
    }
});

module.exports = mongoose.model('Transfers', transferenciasSchema);














