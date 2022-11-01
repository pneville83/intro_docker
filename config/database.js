import { Sequelize } from "sequelize";

import _config from "../config/config.js";

const env = process.env.ENV;
const config = _config;

// create connection
const db = new Sequelize(
  config.database || 'pruebas_peter', 
  config.username || 'postgres',
  config.password ||'johnpeter83',
  {
    host: config.host,
    dialect: 'postgres',
    logging: config.logging,
    define: {
      timestamps: false
    }
  },
  
);

export default db;