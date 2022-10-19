import { Sequelize } from "sequelize";

const db = new Sequelize (
  "pruebas_peter",
  "postgres",
  "johnpeter83", {
    host: "localhost",
    dialect: 'postgres',
    logging: false,
    port: 5432,
    define: {
      timestamp: false
    }
  }
);

export default db;