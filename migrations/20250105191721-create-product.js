'use strict';
/** @type {import('sequelize-cli').Migration} */

const ProductModel = require('../models/product');
const {getModelAttributes} = require('../utils/database')


module.exports = {
  up(queryInterface, Sequelize) {
    const {tableName, attributes} = getModelAttributes(ProductModel); 
    return queryInterface.createTable(tableName, attributes);
   
  },
  async down(queryInterface, Sequelize) {
    const {tableName} = getModelAttributes(ProductModel);
    await queryInterface.dropTable(tableName);
  }
};