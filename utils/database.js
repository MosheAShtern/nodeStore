const { Sequelize } = require('sequelize');
const configSettings = require('../config/config.json');
const ENV = process.env.NODE_ENV || 'development';

const credetials = configSettings[ENV];


const sequelize = new Sequelize(credetials.database, credetials.username, credetials.password, {
    host: credetials.host,
    dialect: credetials.dialect
});

module.exports = sequelize;