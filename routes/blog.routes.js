const router = require('express').Router();
const ctrl = {};

const {
    crearPublicacion,
    obtenerPublicaciones,
    obtenerPublicacion,
    actualizarPublicacion,
    eliminarPublicacion, 
} = require ('../controllers/blog.controllers');

//Ruta para obtener todas las publicaciones.-
router.get('/publicaciones/', obtenerPublicaciones);

//Ruta para obtener una publicacion.-
router.get('/publicacion/:id', obtenerPublicacion);

//Rutas para crear una publicacion.-
router.post('/publicacion/', crearPublicacion);

//Ruta para actualizar publicacion.-
router.put('/publicacion/:id', actualizarPublicacion);

//Ruta para eliminar una publicacion.-
router.delete('/publicacion/:id', eliminarPublicacion)


module.exports = router;
