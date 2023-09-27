const ctrl = {};

const Publicacion = require('../models/Publicacion');

//Necesito un controlador para crear una nueva publicacion.-
ctrl.crearPublicacion = async (req, res) => {

    //const {titulo, detalle, fecha, url_image} => req.body

    try {
        const publicacion = await Publicacion.create(req.body)
        await publicacion.save()
        
        return res.json ({
            msg: 'Publicacion guardada con EXITO!',
            publicacion 
        })
        } catch (error) {
            console.error(error.message);
            return res.status(500).json({
                msg: 'Error al crear nueva Publicacion'
            })
        }

};

//Necesito un controlador para obtener todas las publicaciones.-
ctrl.obtenerPublicaciones = async (req, res) => {
    
    try {
        const publicaciones = await Publicacion.findAll();
        
        return res.json (publicaciones)
        } catch (error) {
            console.error(error.message);
            return res.status(500).json({
                msg: 'Error al obtener Publicaciones'
            })
        }

};

//Necesito un controlador para obtener una publicacion.-
ctrl.obtenerPublicacion = async (req, res) => {
    
    try {
        const { id } = req.params;
        const publicacion = await Publicacion.findByPk(id);
        return res.json(publicacion);
         
    }catch (error) {
        console.error(error.message);
            return res.status(500).json({
                msg: 'Error al obtener Publicacion'
            })
    }
};

//Necesito un controlador para actualizar una publicacion.-
ctrl.actualizarPublicacion = async (req, res) => {
    
    const {id} = req.params;
    
    try {
        const publicacion = await Publicacion.findByPk(id)
        publicacion.set(req.body)
        await publicacion.save();
        return res.json({
            msg: 'Publicacion actualizada con exito'
    })
    } catch (error) {
        console.error(error.message);
            return res.status(500).json({
                msg: 'Error al actualizar Publicacion'
            })
    }
};

//Necesito un controlador para eliminar una publicacion.-
ctrl.eliminarPublicacion = async (req, res) => {
    
};


module.exports = ctrl;