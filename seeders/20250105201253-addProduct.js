'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
    
    */
    await queryInterface.bulkInsert('products', [{
       name: 'PC',
       description: 'just a pc',
       amount: 40
    },
    {
      name: 'laptop',
      description: 'just a laptop',
      amount: 100
   }], {});
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
