
const express = require('express');
const { dbConnetion } = require('./database/config');
require('dotenv').config()


//Crear el servidor de express
const app = express();

//Base de datos 
dbConnetion()

//Directorio Publico
app.use(express.static('public'));

//Lectura y parseo del body
app.use(express.json())

// Rutas
app.use('/api/auth', require('./routes/auth'));
//TODO: CRUD: Eventos



//Escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en el puerto 4000');
});