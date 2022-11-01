import { Sequelize } from "sequelize";
import db from '../config/database.js'


const { DataTypes } = Sequelize;
const Costumer = db.define ('costumers',{

  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },

  name: {
    type: DataTypes.STRING,
  },

  lastName: {
    type: DataTypes.STRING,
  },

  email: {
    type: DataTypes.STRING
  },

  phone: {
    type: Sequelize.STRING
  },  

  createdAt: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW
  },

  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
  }
},
{timestamps: false},
{
tableName: 'costumers'
});
export default Costumer;