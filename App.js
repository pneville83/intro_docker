import express from 'express'
import cors from "cors";
import db from './config/database';
import Router from './routes/routes';

const app = express ();
app.use(express.json());

app.use(cors());

// Testing database connection

try {
  await db.authenticate();
  console.log('Connection has been established successfully.');
} catch (err) {
  console.error('Unable to connect to the database:');
}

app.use(Router);

app.listen(3001, () => console.log('Servidor corriendo en localhost 3001....'))