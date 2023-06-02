'use strict'

const {Router} = require('express');
const {createUser, deleteUser, updateUser, loginUser, viewUserData, viewBalance, historyTransaction} = require("../controller/userController");

const api = Router();
api.post('/create-user', createUser);
api.get('/viewUserData-user/', viewUserData);
api.delete('/delete-user/:id', deleteUser);
api.put('/update-user/:id', updateUser);
api.post('/login-user', loginUser);
api.get('/viewBalance-user', viewBalance )
api.get('/historyTransaction-user/:id', historyTransaction)

module.exports = api;