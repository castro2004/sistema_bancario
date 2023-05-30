'use strict'

const {Router} = require('express');
const {createUser, readUser, deleteUser, updateUser, loginUser, searchUser} = require("../controller/userController");

const api = Router();
api.post('/create-user', createUser);
api.get('/search-user/:id', searchUser);
api.delete('/delete-user/:id', deleteUser);
api.put('/update-user/:id', updateUser);
api.post('/login-user', loginUser);

module.exports = api;