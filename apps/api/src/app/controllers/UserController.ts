import UserModel from '../models/user';

export default class UserController {
  static getUsers = async (req, res, next) => {
    try {
      const users = await UserModel.find();
      res.json(users);
    } catch (error) {
      next(error);
    }
  };
  static getUser = async (req, res, next) => {
    try {
      const user = await UserModel.find({ id: req.params.id });
      res.json(user);
    } catch (error) {
      next(error);
    }
  };
  static getUserByEmail = async (req, res, next) => {
    try {
      const user = await UserModel.find({ email: req.params.email });
      res.json(user);
    } catch (error) {
      next(error);
    }
  };
  static createUser = async (req, res, next) => {
    try {
      const user = await UserModel.create(req.body);
      res.json(user);
    } catch (error) {
      next(error);
    }
  };
  static updateUser = async (req, res, next) => {
    try {
      const user = await UserModel.findByIdAndUpdate(req.params.id, req.body);
      res.json(user);
    } catch (error) {
      next(error);
    }
  };
  static deleteUser = async (req, res, next) => {
    try {
      const user = await UserModel.findByIdAndDelete(req.params.id);
      res.json(user);
    } catch (error) {
      next(error);
    }
  };
}
