import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const todolistSchema = new Schema({
  task: { type: String, required: true },
  expence_name: { type: String, required: true },
  amount: { type: Number, required: true, min: [0, 'greater than 0'] },
  date: { type: Date },
  discount: { type: Number, min: 0, max: 100 },
  type: {
    type: String,
    enum: ['personal', 'work', 'other'],
    default: 'personal',
  },
});

export const Todolist = mongoose.model('Todolist', todolistSchema);
