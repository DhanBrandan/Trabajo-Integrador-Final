//Librerias
const express = require('express')
const app = express()
const cors = require('cors');
const morgan = require('morgan');

require('ejs');
require('dotenv').config();

// Middlewares (funciones)
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.set('view engine', 'ejs');

app.get('/favicon.ico', (req, res) => res.status(204));

 //ctrl + barra esp. para mostrar los datos q exporta "conexion base de datos"
const {sequelize} = require('./database');
sequelize.authenticate()
  .then(() => console.log('Conexion BD Exitosa'))
  .catch( err => console.log('Error al conectar BD', err));

const port = process.env.PORT || 3000;

// app.use(morgan("combined", ()=>{
//   //Escribir archivo de texto
// }))

// CARPETA PUBLICA O CARPETA DE ARCHIVO ESTATICO
app.use(express.static('public'));


//Routes

const blgRoute = require('./routes/blog.routes');
app.use(blgRoute);

app.use((req, res, next) => {
  res.status(404).send("Error 404: RUTA NO ENCONTRADA")
})

app.listen(port, () => console.log(`Servidor ON en http://localhost:${port}`))