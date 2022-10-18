import { Express } from 'express';

// import costumer controllers

import {
  getCostumer,
  getCostumerById,
  createCostumer,
  updateCostumer,
  deleteCostumer
} from '../controllers/costumers.js';

const Router = Express.Router();

router.get('/costumer', getCostumer);
router.get('/costumer/:id', getCostumerById);
router.post('/costumer', createCostumer);
router.put('/costumer/:id', updateCostumer);
router.delete('/costumer/:id', deleteCostumer);

export default Router;