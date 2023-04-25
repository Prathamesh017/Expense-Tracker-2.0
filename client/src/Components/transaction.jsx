import React, { useContext, useState ,useRef} from 'react'
import "./transaction.css"
import { MyContext } from '../Context/context';
import { postItem,getList} from '../Helpers/helper';

function TransactionComponent() {
   
    const {dispatch}=useContext(MyContext);
    const [transactionItem,setTransactionItem]=useState({name:"", amount:0});
    const ref1 = useRef(null);
    const ref2=useRef(null);
    
  
    const addTransaction=async()=>{
           if(!transactionItem.name || !transactionItem.amount){
            alert("Please Enter Both Expense/Income and Amount");
            return;
           }
            await postItem(transactionItem).then(async(e)=>{
                await getList().then(async(results)=>{
                    dispatch({status:"completed",data:results});
                });
            });
           

           
            ref1.current.value=null;
            ref2.current.value=null;


    }

  return (
   <div className='transaction-container'>
    <h4>Add New Transactions</h4>
    <hr></hr>
    <div className='input-transactions'>
        <label>Text</label>
        <input type="text" placeholder='enter expense/income' ref={ref1} onChange={(e)=>{setTransactionItem((item)=>({
         ...item,name:e.target.value
        }))}}></input>
    </div>
    <div className='input-transactions'>
        <label>Amount </label>
        <label style={{fontSize:"14px","marginBottom":"5px"}}>
            (Negative for expense and Postive for Income) 
            </label>
        <input type="number" placeholder='enter amount' ref={ref2} onChange={(e)=>{setTransactionItem((item)=>({
         ...item,amount:e.target.value
        }))}}></input>
    </div>

    <div>
        <button className='add-button' onClick={addTransaction}>Add Transaction</button>
    </div>
   </div>
  )
}

export default TransactionComponent;