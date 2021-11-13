import React, { Fragment } from "react";
import ExpenseFilterForm from "../../Components/Homepage/ ExpenseFilterForm";
import ExpenseDetails from "../../Components/Homepage/ExpenseDetails";
import ExpenseWrapper from "../../Components/Homepage/ExpenseWrapper";

const Homepage = () => {
  return (
    <Fragment>
      <ExpenseDetails />
      <ExpenseFilterForm />
      <ExpenseWrapper />
    </Fragment>
  );
};

export default Homepage;
