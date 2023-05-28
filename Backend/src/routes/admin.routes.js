'use strict'

const {Router} = require('express');
const { createAdmin, searchAdmin, deleteAdmin, updateAdmin, loginAdmin } = require("../controller/adminController");

const api = Router();
api.post('/create-admin', createAdmin);
api.get('/search-admin', searchAdmin);
api.delete('/delete-admin/:id', deleteAdmin);
api.put('/update-admin/:id', updateAdmin);
api.post('/login-admin', loginAdmin);

module.exports = api;