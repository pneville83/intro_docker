import { Sequelize } from "sequelize";
import db from "../config/database.js";

// se crea el modelo user

const { DataTypes } = Sequelize;

const User = db.define ('users', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  name: {
    type: DataTypes.STRING,
  },

  email: {
    type: DataTypes.STRING
  },

  password: {
    type: DataTypes.STRING
  },

  createdAt: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
  },

  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
  }
},
{timestamps: false},
{
tableName: 'users'
});

export default User;