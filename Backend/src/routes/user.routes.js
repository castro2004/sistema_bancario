'use strict'

const {Router} = require('express');
const {createUser, readUser, deleteUser} = require("../controller/userController");
const { updateOne } = require('../model/userModel');

const api = Router();
api.post('/create-user', createUser);
api.get('/list-user', readUser);
api.delete('/delete-user/:id', deleteUser);
api.put('/update-user/:id', updateOne);

module.exports = api;