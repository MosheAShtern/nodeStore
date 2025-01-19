const {DataTypes} = require('sequelize');
const {sequelize} = require('../utils/database');

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
    field: 'name'
  },
  price: {
    type: DataTypes.INTEGER,
    field: 'price',
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    defaultValue: '',
    allowNull: false,
    field: 'description'
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  discount: {
    type: DataTypes.INTEGER,
    field: 'product_discount',
    allowNull: true,
    defaultValue: 0
  },
  isDeleted:{
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: 0,
    field: 'is_deleted'
  }
},{
  tableName: 'products'
});

module.exports = Product;