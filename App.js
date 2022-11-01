import express from "express";
import cors from "cors";
import Router from "./routes/routes.js";
import AuthRouter from "./routes/auth.js";
import db from "./config/database.js";

// Init express
const app = express();

console.log(process.env.ENV);

app.use(express.json());

app.use(cors());
 
//Testing database connection 
try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}
 
app.use(Router);
app.use(AuthRouter);

export default app;