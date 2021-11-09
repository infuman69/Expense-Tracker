import React from "react";
import { useHistory } from "react-router";


const ExpenseListItem = ({description,amount,date,id,idx}) => {
  let history=useHistory()
  let calcdate=date.split('-')
  let month=['January','February','March','April','May','June','July','August','September','October','November','December']
  const handleEdit = (id)=>{
    history.push(`/edit/${id}`)
  }
  return (
    <li key={idx} className="expense-item" onClick={()=>handleEdit(id)}>
      <span>
        <h5>{description}</h5>
        <h6>{month[Number(calcdate[1])-1]} {Number(calcdate[2])}th {calcdate[0]}</h6>
      </span>

      <strong>{amount}</strong>
    </li>
  );
};

export default ExpenseListItem;