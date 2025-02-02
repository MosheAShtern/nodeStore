'use strict';
/** @type {import('sequelize-cli').Migration} */

const ProductImagesModel = require('../models/product_images');
const {getModelAttributes} = require('../utils/database')


module.exports = {
  up(queryInterface, Sequelize) {
    const {tableName, attributes} = getModelAttributes(ProductImagesModel); 
    return queryInterface.createTable(tableName, attributes);
   
  },
  async down(queryInterface, Sequelize) {
    const {tableName} = getModelAttributes(ProductImagesModel);
    await queryInterface.dropTable(tableName);
  }
};