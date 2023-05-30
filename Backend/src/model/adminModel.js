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
    })

module.exports = mongoose.model('Admin', adminSchema)
