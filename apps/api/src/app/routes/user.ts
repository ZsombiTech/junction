import * as express from 'express';
import UserController from '../controllers/UserController';

const router = express.Router();

router.get('/users', UserController.getUsers);
router.get('/user_email/:email', UserController.getUserByEmail);
router.get('/user/:id', UserController.getUser);
router.post('/user', UserController.createUser);
router.put('/user/:id', UserController.updateUser);
router.delete('/user/:id', UserController.deleteUser);

export default router;
