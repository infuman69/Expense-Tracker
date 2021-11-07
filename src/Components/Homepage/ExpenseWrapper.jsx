import React, { Fragment } from "react";
import ExpenseItemList from "./ExpenseItemList";
import { GlobalContext } from "../../Context/GlobalState";
import { useContext } from "react";

const ExpenseWrapper = () => {
  let {theme}=useContext(GlobalContext)
  return (
    <div className={"ExpenseWrapper "+theme}>
      <div className="container expense-wrapper-heading">
        <h3>Expense</h3>
        <h3>Amount</h3>
      </div>

      <ExpenseItemList />
    </div>
  );
};

export default ExpenseWrapper;