import React, { Fragment } from "react";
import { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalState";

const ExpenseFilterForm = () => {
  let { theme, layouttype, changesorttype, sorttype } =
    useContext(GlobalContext);
  const getsorttype = (e) => {
    console.log(e.target.value);
  };

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
        {layouttype === "budget" ? (
          <select
            name="filterDropdown"
            className="filter-dropdown"
            onChange={(e) => getsorttype(e)}
          >
            <option value="filterDate" selected>
              Date
            </option>
            <option value="filterAmount">Amount</option>
          </select>
        ) : (
          <select name="filterDropdown" className="filter-dropdown">
            <option value="filterTask" selected>
              task
            </option>
            <option value="filterDate">Date</option>
          </select>
        )}
        <h1>Date Picker</h1>
      </div>
    </div>
  );
};

export default ExpenseFilterForm;
