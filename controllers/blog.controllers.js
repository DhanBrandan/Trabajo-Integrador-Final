const ctrl = {};
const Publicacion = require('../models/Publicaciones');

//Controlador para crear una nueva publicacion.-
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

//Controlador para obtener todas las publicaciones.-
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

//NControlador para obtener una publicacion.-
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

//Controlador para actualizar una publicacion.-
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

//Controlador para eliminar una publicacion.-
ctrl.eliminarPublicacion = async (req, res) => {
    const { id } = req.params;

    try {
        await Publicacion.destroy({
            where: {
                id
            }
        })
        res.json({
            msg: "Se elimino la publicacion correctamente"
        })
        } catch (error) {
        console.error(error.message);
            return res.status(500).json({
                msg: 'Error al Eliminar la Publicacion'
        })
    
        
    }
    
};


module.exports = ctrl;