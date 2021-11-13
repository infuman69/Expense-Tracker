import React, { Fragment } from "react";
import { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalState";

const ExpenseFilterForm = () => {
  let { theme, layouttype } = useContext(GlobalContext);
  return (
    <div className={"ExpenseFilterForm " + theme}>
      <div className="container filter-content">
        <input
          type="text"
          placeholder={
            layouttype === "budget" ? "Search Expense" : "Search Todos"
          }
          name="searchInput"
          autocomplete="off"
        />
        <select name="filterDropdown" className="filter-dropdown">
          <option value="1" selected>
            Date
          </option>
          <option value="2">Amount</option>
        </select>
        <h1>Date Picker</h1>
      </div>
    </div>
  );
};

export default ExpenseFilterForm;
