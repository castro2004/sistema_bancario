'use strict'

const {Router} = require('express');
const { createAdmin, deleteAdmin, updateAdmin, loginAdmin, getAccountsByTransactionCount, viewDataAdmin, readAdmin } = require("../controller/adminController");
const { createUser} = require("../controller/userController")
const api = Router();

api.post('/create-admin', createAdmin);
api.get('/viewData-admin', viewDataAdmin);
api.delete('/delete-admin/:id', deleteAdmin);
api.put('/update-admin', updateAdmin);
api.post('/login-admin', loginAdmin);
api.get('/admin/accounts', getAccountsByTransactionCount)
api.post('/create-user', createUser);
api.get('/list-admin', readAdmin);



module.exports = api;