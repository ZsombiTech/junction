import SpendingModel from '../models/spending';

export default class SpendingController {
  static getSpendingByGroup = async (req, res, next) => {
    try {
      const spending = await SpendingModel.find({
        groupId: req.params.groupId,
      });
      res.json(spending);
    } catch (error) {
      next(error);
    }
  };
  static getSpendings = async (req, res, next) => {
    try {
      const spendings = await SpendingModel.find();
      res.json(spendings);
    } catch (error) {
      next(error);
    }
  };
  static getSpending = async (req, res, next) => {
    try {
      const spending = await SpendingModel.find({ _id: req.params.id });
      res.json(spending);
    } catch (error) {
      next(error);
    }
  };
  static createSpending = async (req, res, next) => {
    try {
      const spending = await SpendingModel.create(req.body);
      res.json(spending);
    } catch (error) {
      next(error);
    }
  };
  static updateSpending = async (req, res, next) => {
    try {
      const spending = await SpendingModel.findByIdAndUpdate(
        req.params.id,
        req.body
      );
      res.json(spending);
    } catch (error) {
      next(error);
    }
  };
  static deleteSpending = async (req, res, next) => {
    try {
      const spending = await SpendingModel.findByIdAndDelete(req.params.id);
      res.json(spending);
    } catch (error) {
      next(error);
    }
  };
}
