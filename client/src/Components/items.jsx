import React, {useContext,} from 'react'
import "./items.css";
import { MyContext } from '../Context/context';
import { deleteItem,getList} from '../Helpers/helper';

function ItemsContainer(props) {
  const { state,dispatch}=useContext(MyContext);
  const deleteExpense=async (id)=>{
    await  deleteItem(id).then(async(e)=>{
      await getList().then(async(result)=>{
          dispatch({status:"completed",data:result});
      });
  });
  }
 
  console.log(state);
  return (
    <div className='items-container'>
       {
        state.status==="loading"? <p>Loading...</p> :state.status==="completed"&& state.data &&  state.data.length<=0 ? <p>No Expenses to Show</p> : state.data && state?.data.length>0 && state.data.map((data)=>{
           return (<div className='item'>
            <button className='delete-button' onClick={()=>{deleteExpense(data._id)}}>X</button>
           <div className='item-single'>{data.name} <span style={{color:(data.amount>0)  ?"#2eec71":"#c0293b"}}>{data.amount}</span></div>
           </div>
           )
        })
       }
    </div>
  )
}

export default ItemsContainer;