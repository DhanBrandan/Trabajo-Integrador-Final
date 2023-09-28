"Trabajamos con Sequelize."
const { Sequelize, DataTypes} = require('sequelize');

// Creamos una Instancia de Conexion BD

// Option 3: Passing parameters separately (other dialects)
// const sequelize = new Sequelize('database', 'username', 'password', {
//     host: 'localhost',
//     dialect: /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
//   });

const sequelize = new Sequelize('forodb', 'root', '', {
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT, //Seleccionamos que tipo de base de datos vamos a usar.
});


module.exports = {
    sequelize,
    DataTypes,
    Sequelize
}