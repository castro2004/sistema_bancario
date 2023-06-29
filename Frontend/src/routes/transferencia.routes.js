'use strict'

const {Router} = require('express');
const { createTransferencias } = require("../controller/transferenciaController");

const api = Router();
// api.post('/create-transfencias', createTransferencias);

module.exports = api;