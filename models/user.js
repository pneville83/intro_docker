import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const User = db.define ('users', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  userName: {
    type: DataTypes.STRING,
    field: 'user_name',
  },

  email: {
    type: DataTypes.STRING
  },

  password: {
    type: DataTypes.STRING
  },

  createdOn: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
    field: 'created_on',
  }
},
{timestamps: false},
{
tableName: 'users'
});

export default User;