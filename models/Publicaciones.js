const {sequelize, DataTypes} = require ('../database');

const Publicacion = sequelize.define('Publicacion', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    titulo: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    detalle: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    fecha_creacion: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    img_url: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },

},{
    tableName: 'publicaciones',
    timestamps: false
})

module.exports = Publicacion;
