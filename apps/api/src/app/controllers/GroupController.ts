import GroupModel from '../models/group';

export default class GroupController {
  static getGroupsByUserId = async (req, res, next) => {
    console.log("csumi")
    try {
      const groups = await GroupModel.find({
        members: {
          $elemMatch: { id: req.params.id },
        },
      });
      res.json(groups);
    } catch (error) {
      next(error);
    }
  };

  static getGroups = async (req, res, next) => {
    try {
      const groups = await GroupModel.find();
      res.json(groups);
    } catch (error) {
      next(error);
    }
  };
  static getGroup = async (req, res, next) => {
    try {
      const group = await GroupModel.find({ id: req.params.id });
      res.json(group);
    } catch (error) {
      next(error);
    }
  };
  static createGroup = async (req, res, next) => {
    try {
      const group = await GroupModel.create(req.body);
      res.json(group);
    } catch (error) {
      next(error);
    }
  };
  static updateGroup = async (req, res, next) => {
    try {
      const group = await GroupModel.findByIdAndUpdate(req.params.id, req.body);
      res.json(group);
    } catch (error) {
      next(error);
    }
  };
  static deleteGroup = async (req, res, next) => {
    try {
      const group = await GroupModel.findByIdAndDelete(req.params.id);
      res.json(group);
    } catch (error) {
      next(error);
    }
  };
}
