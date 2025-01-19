'use strict';
/** @type {import('sequelize-cli').Migration} */

const ProductModel = require('../models/product');

module.exports = {
  async up(queryInterface, Sequelize) {
    const tableName = ProductModel.tableName; 
    const attributes = {};
    for (const [key, value] of Object.entries(ProductModel.rawAttributes)) {
      attributes[key] = value;
    }
    return queryInterface.createTable(tableName, attributes);
   
  },
  async down(queryInterface, Sequelize) {
    const tableName = ProductModel.tableName; 
    await queryInterface.dropTable(tableName);
  }
};