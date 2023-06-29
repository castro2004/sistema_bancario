const mongoose = require('mongoose');

    const adminSchema = new mongoose.Schema({
        user: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true
        },
        rol: {
            type: String,
            enum: ['USER', 'ADMIN'],
            default: 'USER',
        },
        dpi: {
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
    })

module.exports = mongoose.model('Admin', adminSchema)
