import React, { useContext } from "react";
import { useHistory } from "react-router";
import { RiDeleteBinFill, RiEditFill } from "react-icons/ri";
import { GlobalContext } from "../../Context/GlobalState";

const ExpenseListItem = ({ description, amount, date, id, idx }) => {
  let { layouttype, deltodo, delexpense } = useContext(GlobalContext);
  let history = useHistory();
  let calcdate = date.split("-");
  let month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const handleEdit = (id) => {
    history.push(`/edit/${id}`);
  };
  const handleDelete = (id) => {
    if (layouttype === "budget") delexpense(id);
    else deltodo(id);
  };
  return (
    <li key={idx} className="expense-item">
      <span>
        <h5>{description}</h5>
        <h6>
          {month[Number(calcdate[1]) - 1]} {Number(calcdate[2])}th {calcdate[0]}
        </h6>
      </span>

      <strong>
        <RiEditFill
          style={{ cursor: "pointer", color: "green", marginRight: "10px" }}
          onClick={() => handleEdit(id)}
        />
        <RiDeleteBinFill
          style={{ cursor: "pointer", color: "red", margin: "0 10px" }}
          onClick={() => handleDelete(id)}
        />
        {amount}
      </strong>
    </li>
  );
};

export default ExpenseListItem;
