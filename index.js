
const express = require('express');
const { dbConnetion } = require('./database/config');
require('dotenv').config();
const cors = require('cors');


//Crear el servidor de express
const app = express();

//Base de datos 
dbConnetion();

//CORS 
app.use(cors());

//Directorio Publico
app.use(express.static('public'));

//Lectura y parseo del body
app.use(express.json());

// Rutas
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));
//TODO: CRUD: Eventos



//Escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en el puerto 4000');
});