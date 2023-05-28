'use strict'

const {Router} = require('express');
const {createUser, readUser, deleteUser, updateUser, loginUser} = require("../controller/userController");

const api = Router();
api.post('/create-user', createUser);
api.get('/list-user', readUser);
api.delete('/delete-user/:id', deleteUser);
api.put('/update-user/:id', updateUser);
api.post('/login-user', loginUser);

module.exports = api;