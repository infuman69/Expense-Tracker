import React, { Fragment, useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import ExpenseForm from "../../Components/AddExpense/ExpenseForm";
import Expenseheader from "../../Components/AddExpense/Expenseheader";
import { GlobalContext } from "../../Context/GlobalState";

const AddExpense = () => {
  let params = useParams();
  let { layouttype } = useContext(GlobalContext);
  return (
    <Fragment>
      {layouttype === "budget" ? (
        <Expenseheader
          formheader={params.id === undefined ? "Add Expense" : "Edit Expense"}
        />
      ) : (
        <Expenseheader
          formheader={params.id === undefined ? "Add Todo" : "Edit Todo"}
        />
      )}
      <ExpenseForm />
    </Fragment>
  );
};

export default AddExpense;
