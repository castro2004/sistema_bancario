// const {Sequelize, DataTypes, Model} = require('Sequelize')
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
  accountNumber: {
    type: String,
    unique: true
  },
  typeAccount: {
    type: String,
    enum: ['Monetaria', 'Corriente', 'Ahorros', 'Cheques'],
    default: 'Monetaria',
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
  token:{
    type: String
  },
  transactions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Transfers'
    }
  ],
  favorites: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Favorite'
    }
  ]
});

userSchema.pre('save', async function (next) {
  if (!this.accountNumber) {
    let randomNumber;
    let accountExists = true;
    while (accountExists) {
      randomNumber = Math.floor(1000000000 + Math.random() * 9000000000).toString();
      const existingUser = await this.constructor.findOne({ accountNumber: randomNumber });
      accountExists = existingUser ? true : false;
    }
    this.accountNumber = randomNumber;
  }
  next();
});

userSchema.methods.historyTransaction = async function () {
  await this.populate('transactions');
  return this.transactions;
};

module.exports = mongoose.model('Users', userSchema);