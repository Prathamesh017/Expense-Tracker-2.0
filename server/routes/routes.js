import {Router} from "express";
import {getAllExpense,deleteExpense, postExpense} from "../controllers/controller.js"
const usersRouter = Router();


usersRouter.get('/', getAllExpense);
usersRouter.post('/', postExpense);
usersRouter.delete('/:id', deleteExpense);


export default usersRouter;