const express = require('express')
const app = express()
const cors = require('cors');
const morgan = require('morgan');



// Middlewares (funciones)
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

// app.use(morgan("combined", ()=>{
//   //Escribir archivo de texto
// }))
  

app.get('/',  (req, res) => {
  res.send('Creaste tu Primer Servidor')
})

app.get('/home', (req, res) => {
    res.send("Bienvenido a tu Servidor")
})

//Recibir Datos por Body
app.post('/register', (req, res) => {
    //Cuerpo de la peticion (body)
    const {username, password} = req.body;

    //Parametros


    //Paramtetros de consulta (query params)
    res.send("Registro Exitoso")
})

//Recibir Datos por Parametros (variables en url)
app.post('/usuario/:userID', (req, res) => {
  
  const {userID} = req.params

  const { rol } = req.query

  res.send({userID, rol})
  
})

//Recibir datos por Parametros de consulta
app.get('/consulta', (req, res) => {

  const { q } = req.query
  
  res.send(req.query)

  // http:localhost:3000/?q="url"

})

app.use((req, res, next) => {
  res.status(404).send("Error 404: RUTA NO ENCONTRADA")
})

app.listen(3000, () => console.log("Servidor ON en http://localhost:3000"))