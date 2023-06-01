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
    rol: {
            type: String,
            enum: ['USER', 'ADMIN'],
            default: 'USER',
    },
    acountNumber: {
        type: String,
        required: true,
        unique: true 
        },
    typeAcount: {
        type: String,
        enum: ['Monetaria', 'Corriente', 'Ahorros', 'Cheques' ]
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
  transactions: [
      {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Transfers'
      }
  ]
    });

     userSchema.methods.historyTransaction = async function(){
         await this.populate('transactions')
         return this.transactions
 };

module.exports = mongoose.model('User', userSchema);