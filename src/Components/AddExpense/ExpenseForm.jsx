import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../../Context/GlobalState";
import { useHistory, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const ExpenseForm = () => {
  let [data, setdata] = useState(null);
  let params = useParams();
  let { extractitem, foundobj } = useContext(GlobalContext);
  useEffect(() => {
    if (params.id !== undefined) {
      extractitem(params.id);
      setdata(foundobj);
    }
  }, [foundobj]);

  let history = useHistory();
  let { expenses, addExpense, theme, replacewithnew } =
    useContext(GlobalContext);
  let [formData, setFormData] = useState({
    description: "",

    amount: "",
    date: "",

    note: "",
    id: "",
  });
  useEffect(() => {
    if (data !== null || data !== undefined) {
      setFormData({ ...data });
      console.log(formData);
    }
  }, [data]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (params.id === undefined) {
      addExpense({ ...formData, id: uuidv4() });
    } else {
      console.log(formData);
      replacewithnew(formData);
    }

    setFormData({
      description: "",
      amount: "",
      date: "",
      note: "",
    });
    history.push("/");
  };

  return (
    <div className={"inputwrapper1 " + theme}>
      <form className={"inputwrapper " + theme} onSubmit={handleSubmit}>
        <input
          className="expenseinput"
          type="text"
          placeholder="description"
          name="description"
          onChange={handleChange}
          value={formData.description}
        />
        <input
          type="number"
          className="expenseinput"
          placeholder="Amount"
          name="amount"
          onChange={handleChange}
          value={formData.amount}
        />
        <input
          className="expenseinput"
          type="date"
          name="date"
          onChange={handleChange}
          value={formData.date}
        />
        <textarea
          name="note"
          cols="30"
          rows="10"
          placeholder="Add a note for your expense (optional)"
          className="expenseinput textarea1"
          onChange={handleChange}
          value={formData.note}
        ></textarea>
        <button className="submitbtn" type="submit">
          Save Expense
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
