const { Sequelize } = require('sequelize');
const { DB_HOST, DB_NAME, DB_USER, DB_PASSWORD }  = process.env;

const database = new Sequelize(
    DB_NAME,
    DB_USER,
    DB_PASSWORD,
    { 
        dialect: 'mysql', 
        host: DB_HOST
    }
);


module.exports = database;