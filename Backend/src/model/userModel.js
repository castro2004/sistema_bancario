const mongoose = require('mongoose');

    const userSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true 
        },
    username: {
        type: String,
        required: true,
        unique: true 
        },
    numeroCuenta: {
        type: String,
        required: true,
        unique: true 
        },
    dpi: {
        type: String,
        required: true 
        },
    direccion: {
        type: String,
        required: true 
        },
    celular: {
        type: String,
        required: true 
        },
    correo: {
        type: String,
        required: true,
        unique: true 
        },
    password: {
        type: String,
        required: true 
        },
    nombreTrabajo: {
        type: String,
        required: true 
        },
    ingresosMensuales: {
        type: Number,
        required: true 
        },
    saldo: {
        type: Number,
        default: 0 
        },
    });

const User = mongoose.model('User', userSchema);

module.exports = User;