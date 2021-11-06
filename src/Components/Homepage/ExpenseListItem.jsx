import React from "react";

const ExpenseListItem = ({description,amount,date}) => {
  let calcdate=date.split('-')
  let month=['January','February','March','April','May','June','July','August','September','October','November','December']
  return (
    <li className="expense-item">
      <span>
        <h5>{description}</h5>
        <h6>{month[Number(calcdate[1])-1]} {Number(calcdate[2])}th {calcdate[0]}</h6>
      </span>

      <strong>{amount}</strong>
    </li>
  );
};

export default ExpenseListItem;