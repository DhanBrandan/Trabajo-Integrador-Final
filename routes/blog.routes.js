const router = require('express').Router();
const ctrl = {};

const {
    crearPublicacion,
    obtenerPublicaciones,
    obtenerPublicacion,
    actualizarPublicacion,
    eliminarPublicacion, 
} = require ('../controllers/blog.controllers');

// ========================================================
//     RUTAS PARA MANEJAR VISTAS (Views)
// ========================================================

router.get('/', (req, res) =>{
    res.render('index')
})

router.get('/admin', (req, res) =>{
    res.render('admin')
})

// Ruta para devolver la vista para administrar publicaciones
router.get('/admin/publicaciones', (req, res) => {
    return res.render('tabla-publicaciones')
})

// Ruta para devolver la vista para agregar nueva publicación
router.get('/admin/nueva-publicacion', (req, res)=> {
    return res.render('nueva-publicacion')
})

// Ruta para devolver la vista para editar publicación existente
router.get('/admin/editar-publicacion/:id', (req, res)=> {
    res.render('editar-publicacion', { id: req.params.id })
})

// ========================================================
//     RUTAS PARA MANEJAR DATOS
// ========================================================

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

