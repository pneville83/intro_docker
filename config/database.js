import { Sequelize } from "sequelize";
import * as dotenv from 'dotenv';
dotenv.config();



const db = new Sequelize (
  process.env.DB_NAME,
  process.env.DB_USER,
  "johnpeter83", {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    logging: false,
    port: 5432,
    define: {
      timestamp: false
    }
  }
);

export default db;