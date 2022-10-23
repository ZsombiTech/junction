import * as express from 'express';
import TripsController from '../controllers/TripController';

const router = express.Router();

router.get('/trips', TripsController.getTrips);
router.get('/trip/:id', TripsController.getTrip);
router.post('/trip', TripsController.createTrip);
router.put('/trip/:id', TripsController.updateTrip);
router.delete('/trip/:id', TripsController.deleteTrip);

export default router;
