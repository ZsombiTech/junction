import mongoose from 'mongoose';

const Spending_schema = new mongoose.Schema({
  groupId: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    default: 0,
  },
  place: {
    type: String,
    default: '',
  },
  type: {
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
export default mongoose.model('Spending', Spending_schema);
