import React, { useEffect,useState} from 'react';
import './App.css';
import BalanceComponent from './Components/balance';
import HistoryComponent from './Components/history';
import TransactionComponent from './Components/transaction';
import { MyContext } from './Context/context';
import ItemsContainer from './Components/items';
import { getList } from './Helpers/helper';

function App() {
  let initalState={
    status:"loading",
    data:[],
  };
  const [state, dispatch] = useState(initalState);
  useEffect(() => {
    ;(async () => {
      const results = await getList();
      dispatch({status:"completed",data:results});
    })()
  }, []);

 

  return (
    <div className="main-container">
      <div className="container">
        <h1>Expense Tracker</h1>
        <MyContext.Provider value={{ state, dispatch }}>
          <BalanceComponent></BalanceComponent>
          <HistoryComponent></HistoryComponent>
          <ItemsContainer></ItemsContainer>
          <TransactionComponent></TransactionComponent>
        </MyContext.Provider>
      </div>
    </div>
  )
}

export default App
