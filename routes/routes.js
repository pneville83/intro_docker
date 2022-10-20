import express from "express";
// import costumer controllers

import {
  getCostumer,
  getCostumerById,
  createCostumer,
  updateCostumer,
  deleteCostumer
} from '../controllers/costumers.js';
import { isUserAuthenticated } from "../middlewares/auth.js";

const Router = express.Router();

Router.get('/costumers', isUserAuthenticated, getCostumer);
Router.get('/costumers/:id', isUserAuthenticated, getCostumerById);
Router.post('/costumers', isUserAuthenticated, createCostumer);
Router.put('/costumers/:id', isUserAuthenticated, updateCostumer);
Router.delete('/costumers/:id', isUserAuthenticated, deleteCostumer);

export default Router;