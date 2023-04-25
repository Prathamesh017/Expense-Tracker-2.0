import mongoose from 'mongoose'

const ExpenseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    default: 0,
    required: false,
  },
})

export const ExpenseModel = mongoose.model('ExpenseModel', ExpenseSchema)
