import React, { Fragment, useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import ExpenseForm from "../../Components/AddExpense/ExpenseForm";
import Expenseheader from "../../Components/AddExpense/Expenseheader";
import { GlobalContext } from "../../Context/GlobalState";

const AddExpense = () => {
  let params = useParams();
  return (
    <Fragment>
      <Expenseheader
        formheader={params.id === undefined ? "Add Expense" : "Edit Expense"}
      />
      <ExpenseForm />
    </Fragment>
  );
};

export default AddExpense;
