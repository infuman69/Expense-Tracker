import React, { Fragment ,useState,useContext} from "react";
import { useHistory } from "react-router-dom";
import { GlobalContext } from "../../Context/GlobalState";

const ExpenseDetails = () => {
    let history=useHistory()
    let {expenses}=useContext(GlobalContext)
    let amount
    const handleClick=()=>{
        history.push('/addexpense')
    }
    amount = expenses.reduce((acc,item)=> acc+=Number(item.amount),0)
  return (
    <Fragment>
      <div className="expensedetails">
        <div className="container expense-content">
          <h1>Viewing {expenses.length} expenses totalling ${amount}</h1>
          <button className="add-expense-btn" onClick={handleClick}>Add Expense</button>
        </div>
      </div>
    </Fragment>
  );
};

export default ExpenseDetails;