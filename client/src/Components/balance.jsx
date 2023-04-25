import React ,{useContext, useEffect, useState} from 'react';
import getSymbolFromCurrency from 'currency-symbol-map';
import "./balance.css";
import { MyContext } from '../Context/context';

function BalanceComponent() {
  const {state}=useContext(MyContext);
  const [values,setValues]=useState({income:0,expense:0,balance:0});

  useEffect(()=>{
      let income= 0,expense=0,balance=0;
      
      state.data && state.data.length>0 && state.data.map((transaction)=>{
        transaction.amount=Number(transaction.amount);
         if(transaction.amount>0){
                income+=transaction.amount;
         }
         else{
             expense+= transaction.amount
         }
        return balance+=transaction.amount;
      })
      setValues({income:income,expense:Math.abs(expense),balance:balance});
  },[state])
  return (
    <div className='balance-container'>
       <div className='balance'>
         <h3>Your Balance</h3>
         <h4>{getSymbolFromCurrency('INR')} {values.balance}</h4>
       </div>
       <div className='income-expense-container'>
        <div className='income'>
            <div>Income</div>
            <div id='income-amount-color'>{getSymbolFromCurrency('INR')} {values.income}</div>
        </div>
        <div className='expense'>
            <div>Expense</div>
            <div id='expense-amount-color'>{getSymbolFromCurrency('INR')}{values.expense}</div>
        </div>
       </div>
    </div>
  )
}

export default  BalanceComponent;