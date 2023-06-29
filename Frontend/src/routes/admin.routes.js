'use strict'

const {Router} = require('express');
const { createAdmin, deleteAdmin, updateAdmin, loginAdmin, getAccountsByTransactionCount, viewDataAdmin } = require("../controller/adminController");
const { createUser, deleteUser } = require("../controller/userController")
const api = Router();
api.post('/create-admin', createAdmin);
api.get('/viewData-admin', viewDataAdmin);
api.delete('/delete-admin/:id', deleteAdmin);
api.put('/update-admin/:id', updateAdmin);
api.post('/login-admin', loginAdmin);
api.get('/admin/accounts', getAccountsByTransactionCount)
api.post('/create-user', createUser);
api.delete('/delete-user/:id', deleteUser);

module.exports = api;