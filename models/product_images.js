const {DataTypes} = require('sequelize');
const {sequelize} = require('../utils/database');

const ProductImages = sequelize.define('ProductImages', {
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'url',
    primaryKey: true
  }
},{
  tableName: 'product_images',
  timestamps: false
});

module.exports = ProductImages;