import mongoose from 'mongoose';

const Trip_schema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  from: {
    type: String,
    default: '',
  },
  to: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    default: '',
  },
  transactions: {
    type: Array,
    default: [],
  },
  balance: {
    type: Number,
    default: 0,
  },
  accountnumber: {
    type: String,
    default: '',
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
export default mongoose.model('Trip', Trip_schema);
