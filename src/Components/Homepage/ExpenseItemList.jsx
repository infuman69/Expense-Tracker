import React, { Fragment, useContext } from "react";
import { GlobalContext } from "../../Context/GlobalState";
import ExpenseListItem from "./ExpenseListItem";

const ExpenseItemList = () => {
  let { expenses, todo, layouttype } = useContext(GlobalContext);

  return (
    <Fragment>
      <div className="container">
        <ul className="ExpenseItemList">
          {layouttype === "budget"
            ? expenses.map((item, idx) => {
                return (
                  <ExpenseListItem
                    key={idx}
                    description={item.description}
                    amount={item.amount}
                    date={item.date}
                    id={item.id}
                  />
                );
              })
            : todo.map((item, idx) => {
                return (
                  <ExpenseListItem
                    key={idx}
                    description={item.task}
                    amount={item.note}
                    date={item.date}
                    id={item.id}
                  />
                );
              })}
        </ul>
      </div>
    </Fragment>
  );
};

export default ExpenseItemList;
