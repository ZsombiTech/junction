import * as express from 'express';
import SpendingController from '../controllers/SpendingController';

const router = express.Router();

router.get('/spendings/group/:groupId', SpendingController.getSpendingByGroup);
router.get('/spendings', SpendingController.getSpendings);
router.get('/spending/:id', SpendingController.getSpending);
router.post('/spending', SpendingController.createSpending);
router.put('/spending/:id', SpendingController.updateSpending);
router.delete('/spending/:id', SpendingController.deleteSpending);

export default router;
