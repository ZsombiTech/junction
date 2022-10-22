import * as express from 'express';
import GroupController from '../controllers/GroupController';

const router = express.Router();

router.get('/groups', GroupController.getGroups);
router.get('/group/:id', GroupController.getGroup);
router.post('/group', GroupController.createGroup);
router.put('/group/:id', GroupController.updateGroup);
router.delete('/group/:id', GroupController.deleteGroup);

export default router;
