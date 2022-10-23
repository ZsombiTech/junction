import mongoose from 'mongoose';

const Group_schema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  members: {
    type: Array,
    default: [],
  },
  trips: {
    type: Array,
    default: [],
  },
  transactions: {
    type: Array,
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});
export default mongoose.model('Group', Group_schema);
