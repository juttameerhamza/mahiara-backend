const { Sequelize } = require('sequelize');
const { DB_HOST, DB_NAME, DB_USER, DB_PASSWORD }  = process.env;

const database = new Sequelize(
    DB_NAME || 'u881161821_mahiara',
    DB_USER || 'u881161821_mahiara',
    DB_PASSWORD || 'mahiara',
    { 
        dialect: 'mysql', 
        host: DB_HOST || localhost
    }
);


module.exports = database;