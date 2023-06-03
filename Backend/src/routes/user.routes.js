'use strict'

const {Router} = require('express');
const {createUser, deleteUser, updateUser, loginUser, viewUserData, viewBalance, historyTransaction} = require("../controller/userController");
const { createFavorite, readFavorite, updateFavorite, deleteFavorite } = require('../controller/favoriteController')
const { createTransferencias } = require('../controller/transferenciaController')


const api = Router();
api.get('/viewUserData-user/', viewUserData);
api.put('/update-user/:id', updateUser);
api.post('/login-user', loginUser);
api.get('/viewBalance-user', viewBalance )
api.get('/historyTransaction-user', historyTransaction)
api.post('/create-favorite', createFavorite)
api.get('/read-favorite', readFavorite);
api.put('/update-favorite', updateFavorite);
api.delete('delete-favorite', deleteFavorite);
api.post('/create-transfencias', createTransferencias);

module.exports = api;