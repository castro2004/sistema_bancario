'use strict'

const express = require('express');
const app = express();
const {connection} = require("./src/database/connection");
require('dotenv').config();
const port = process.env.PORT;
const routesU = require('./src/routes/user.routes')
const routesA = require("./src/routes/admin.routes")
const {defaultAdmin} = require('./adminDefault')

connection();

app.use(express.urlencoded({extended: false}));

app.use(express.json());

app.use('/api', routesU, routesA)

app.listen(port, ()=>{
    console.log(`Servidor corriendo en el puerto ${port}`);
})

defaultAdmin();
