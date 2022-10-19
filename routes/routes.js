import express from "express";
// import costumer controllers

import {
  getCostumer,
  getCostumerById,
  createCostumer,
  updateCostumer,
  deleteCostumer
} from '../controllers/costumers.js';

const Router = express.Router();

Router.get('/costumer', getCostumer);
Router.get('/costumer/:id', getCostumerById);
Router.post('/costumer', createCostumer);
Router.put('/costumer/:id', updateCostumer);
Router.delete('/costumer/:id', deleteCostumer);

export default Router;