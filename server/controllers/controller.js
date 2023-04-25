import UserService from '../services/Service.js'

export const getAllExpense = async (req, res) => {
  try {
    let allExpenses = await UserService.getAllExpense();
    console.log(allExpenses);
    return res
      .status(200)
      .json({
        status: 'Success',
        data: allExpenses,
        message: 'Succesfully Users Retrieved',
      })
  } catch (e) {
    return res
      .status(400)
      .json({ status: 'Failure', message: "Can't Fetch Details" })
  }
}

export const postExpense = async (req, res) => {
  try {
    
    let expense = await UserService.createExpense(req.body.items);
    return res.status(200).json({
        status: 'Success',
        data: expense,
        message: 'New Expense Added Successfully',
      })
  } catch (error) {
   
    return res.status(400).json({ status: 'Failure', message: 'Fail to Add' })
  }
}

export const deleteExpense = async (req, res) => {
  try {
    await UserService.deleteExpense(req.params.id);

    return res
      .status(200)
      .json({
        status: 'Success',
        message: 'Expense Deleted Successfully',
      })
  } catch (error) {
    return res
      .status(400)
      .json({ status: 'Failure', message: 'Failed To Delete'})
  }
}
