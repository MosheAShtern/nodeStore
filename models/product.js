const {DataTypes} = require('sequelize');
const sequelize = require('../utils/database');

const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'product_name'
  },
  price: {
    type: DataTypes.INTEGER,
    field: 'product_price',
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    defaultValue: '',
    allowNull: false,
    field: 'product_desc'
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'product_quantity'
  },
  discount: {
    type: DataTypes.INTEGER,
    field: 'product_discount',
    allowNull: true,
    defaultValue: 0
  }
});

module.exports = Product;