'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favoriteSchema = new mongoose.Schema({
    alias: {
        type: String,
        required: true
    },
    acountNumber: {
        type: String,
        ref: 'User',
        required: true
    },
     acountType: {
         type: String,
         default: null
     }
});

 favoriteSchema.pre('save', async function (next) {
    
    try{
        const User = mongoose.model('User');
        const user = await User.findOne({acountNumber: this.acountNumber})
        if(user){
            this.acountType = user.typeAcount;
        }
        next();
    }catch(err){
        next(err)
    }

    
});

module.exports = mongoose.model('Favorite', favoriteSchema);