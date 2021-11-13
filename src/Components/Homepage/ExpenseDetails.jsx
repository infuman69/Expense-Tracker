import React, { Fragment, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { GlobalContext } from "../../Context/GlobalState";

const ExpenseDetails = () => {
  let history = useHistory();
  let amount;
  let { expenses, theme, layouttype, todo } = useContext(GlobalContext);
  const handleClick = () => {
    history.push("/addexpense");
  };
  amount = expenses.reduce((acc, item) => (acc += Number(item.amount)), 0);
  return (
    <Fragment>
      <div className={"expensedetails " + theme}>
        <div className="container expense-content">
          <h1>
            Viewing {layouttype === "budget" ? expenses.length : todo.length}{" "}
            {layouttype === "budget" ? "Expenses" : "todos"} totalling{" "}
            {layouttype === "budget" ? amount : ""}
          </h1>
          <button className="add-expense-btn" onClick={handleClick}>
            {layouttype === "budget" ? "Add Expense" : "Add Todo"}
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default ExpenseDetails;
