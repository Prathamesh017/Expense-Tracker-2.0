import { ExpenseModel } from '../model.js/model.js'
const createExpense = async (reqBody) => {
  let expense;
  const expenseObj= new ExpenseModel({
    name:reqBody.name,
    amount:reqBody.amount,
  });
  
  try {
    expense = await expenseObj.save();
  } catch (error) {
    console.log('Error', error)
    throw error
  }
  return expense
}
const getAllExpense = async () => {
  try {
    let allExpenses = await ExpenseModel.find()
    return allExpenses
  } catch (error) {
    console.log('Error', error)
    throw error
  }
}
const deleteExpense = async (id) => {
  const pt=await ExpenseModel.deleteOne({ _id:id });
  return;
}
const UserService = {
  createExpense,
  getAllExpense,
  deleteExpense,
}
export default UserService
