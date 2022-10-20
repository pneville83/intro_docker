import { Sequelize } from "sequelize";
import db from '../config/database.js';
import costumer from './costumer.js'

const { DataTypes } = Sequelize;

const Product = db.define ('product', {

  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },

  brand: {
    type: DataTypes.String
  },

  model: {
    type: DataTypes.String
  },

  price: {
    type: DataTypes.DECIMAL
  },

  stock: {
    type: DataTypes.NUMBER
  },

  modelId: {
    type: DataTypes.STRING,
    field: 'product_model',
    references: {
      model: costumer,
      key: 'model'
    }
  },

  createdOm: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
    field: created_on
  }
},{
  tableName: 'porduct'
});

export default Product;