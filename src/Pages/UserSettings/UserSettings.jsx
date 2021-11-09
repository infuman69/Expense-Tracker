import React, { Fragment } from "react";
import Expenseheader from "../../Components/AddExpense/Expenseheader";
import Settings from "../../Components/UserSettings/Settings";

const UserSettings = () => {
  return (
    <Fragment>
      <Expenseheader formheader={"User Settings"} />
      <Settings />
    </Fragment>
  );
};

export default UserSettings;
