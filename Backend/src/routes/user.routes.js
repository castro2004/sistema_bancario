'use strict'

const {Router} = require('express');
const {createUser, readUser, deleteUser, updateUser} = require("../controller/userController");

const api = Router();
api.post('/create-user', createUser);
api.get('/list-user', readUser);
api.delete('/delete-user/:id', deleteUser);
api.put('/update-user/:id', updateUser);

module.exports = api;