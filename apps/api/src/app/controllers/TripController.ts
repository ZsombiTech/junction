import TripModel from '../models/trip';

export default class TripController {
  static getTrips = async (req, res, next) => {
    try {
      const trips = await TripModel.find();
      res.json(trips);
    } catch (error) {
      next(error);
    }
  };
  static getTrip = async (req, res, next) => {
    try {
      const trip = await TripModel.find({ id: req.params.id });
      res.json(trip);
    } catch (error) {
      next(error);
    }
  };
  static createTrip = async (req, res, next) => {
    try {
      const trip = await TripModel.create(req.body);
      res.json(trip);
    } catch (error) {
      next(error);
    }
  };
  static updateTrip = async (req, res, next) => {
    try {
      const trip = await TripModel.findByIdAndUpdate(req.params.id, req.body);
      res.json(trip);
    } catch (error) {
      next(error);
    }
  };
  static deleteTrip = async (req, res, next) => {
    try {
      const trip = await TripModel.findByIdAndDelete(req.params.id);
      res.json(trip);
    } catch (error) {
      next(error);
    }
  };
}
