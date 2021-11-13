import React, { Fragment } from "react";
import ExpenseItemList from "./ExpenseItemList";
import { GlobalContext } from "../../Context/GlobalState";
import { useContext } from "react";

const ExpenseWrapper = () => {
  let { theme, layouttype } = useContext(GlobalContext);
  return (
    <div className={"ExpenseWrapper " + theme}>
      <div className="container expense-wrapper-heading">
        <h3>{layouttype === "budget" ? "Expense" : "Todo"}</h3>
        <h3>{layouttype === "budget" ? "Amount" : "Note"}</h3>
      </div>

      <ExpenseItemList />
    </div>
  );
};

export default ExpenseWrapper;
