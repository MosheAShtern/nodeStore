'use strict';

const data = require('../data/products.json');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
    
    */
    const createdAt = new Date();
    const updatedAt = new Date();
    await queryInterface.bulkInsert('products', data.map(product => ({createdAt, updatedAt, ...product})), {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * 
     */
      await queryInterface.bulkDelete('products', null, {});
  }
};
