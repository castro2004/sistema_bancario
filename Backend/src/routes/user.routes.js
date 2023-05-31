'use strict'

const {Router} = require('express');
const {createUser, deleteUser, updateUser, loginUser, viewUserData, viewBalance} = require("../controller/userController");

const api = Router();
api.post('/create-user', createUser);
api.get('/viewUserData-user/:id', viewUserData);
api.delete('/delete-user/:id', deleteUser);
api.put('/update-user/:id', updateUser);
api.post('/login-user', loginUser);
api.get('/viewBalance-user/:id', viewBalance )

module.exports = api;