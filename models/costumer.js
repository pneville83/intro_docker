import { Sequelize } from "sequelize";
import db from '../config/database.js'


const { DataTypes } = Sequelize;
const costumer = db.define ('costumer',{

  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },

  firstName: {
    type: DataTypes.STRING,
    field: 'first_name'
  },

  lastName: {
    type: DataTypes.STRING,
    field: 'last_name'
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
},
{timestamps: false},
{
   tableName: 'costumer'
});
export default costumer;