import { Sequelize } from "sequelize";
import db from '../config/database.js'


const { DataTypes } = Sequelize;
const Costumer = db.define ('costumer',{

  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },

  firstName: {
    type: DataTypes.STRING
  },

  lastName: {
    type: DataTypes.STRING
  },

  mobile: {
    type: DataTypes.STRING
  },

  model: {
    type: DataTypes.STRING
  },

  createdOn: {
    type: DataTypes.DATE,
    field: 'created_on',
    defaultValue: Sequelize.NOW
  }
},{
   tableName: 'costumer'
});
export default Costumer;