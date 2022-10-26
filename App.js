import express from 'express';
import AuthRouter from './routes/auth.js'
import db from './config/database.js';
import Router from './routes/routes.js';
import cors from 'cors'



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
app.use(AuthRouter);

app.listen(3001, () => console.log('Servidor corriendo en localhost 3001....'))

export default app;