const mongoose = require('mongoose');

    const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true 
        },
    username: {
        type: String,
        required: true,
        unique: true 
        },
    acountNumber: {
        type: String,
        required: true,
        unique: true 
        },
    dpi: {
        type: String,
        required: true 
        },
    address: {
        type: String,
        required: true 
        },
    cellPhone: {
        type: String,
        required: true 
        },
    email: {
        type: String,
        required: true,
        unique: true 
        },
    password: {
        type: String,
        required: true 
        },
    nameWork: {
        type: String,
        required: true 
        },
    incomeMonth: {
        type: Number,
        required: true 
        },
    balance: {
        type: Number,
        default: 0 
        },
    });

module.exports = mongoose.model('User', userSchema)