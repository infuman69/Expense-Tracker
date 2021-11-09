import React, { Fragment, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { GlobalContext } from "../../Context/GlobalState";

const ExpenseDetails = () => {
  let history = useHistory();
  let { theme } = useContext(GlobalContext);
  const handleClick = () => {
    history.push("/addexpense");
  };
  return (
    <Fragment>
      <div className={"expensedetails " + theme}>
        <div className="container expense-content">
          <h1>Viewing expenses totalling </h1>
          <button className="add-expense-btn" onClick={handleClick}>
            Add Expense
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default ExpenseDetails;
