import React, { Fragment, useContext } from "react";
import { GlobalContext } from "../../Context/GlobalState";
import ExpenseListItem from "./ExpenseListItem";


const ExpenseItemList = () => {
    let {expenses}=useContext(GlobalContext)

  return (
    <Fragment>
      <div className="container">
        <ul className="ExpenseItemList">
         {expenses.map((item,idx)=>{
          return( <ExpenseListItem description={item.description} amount={item.amount} date={item.date}/>)
         })
         }</ul>
      </div>
    </Fragment>
  );
};

export default ExpenseItemList;