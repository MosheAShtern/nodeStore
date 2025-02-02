'use strict';

const data = require('../data/productImages.json');
const ProductImage = require('../models/product_images');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  
    const productImageData = data.reduce((acc, productImage) =>{
      const {productId, images} = productImage;
      const productImagesSingle = images.map(url => {
          return {
            productId,
            url
          }
      })
      acc.push(...productImagesSingle);
      return acc;
    }, []);

    await ProductImage.bulkCreate(productImageData);
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
