import React, { useState, useContext, useEffect, Fragment } from "react";
import { GlobalContext } from "../../Context/GlobalState";
import { useHistory, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Layout from "../UserSettings/Layout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  let { expenses, addExpense, theme, replacewithnew, layouttype, addtodo } =
    useContext(GlobalContext);
  let [formData, setFormData] = useState(
    layouttype === "budget"
      ? {
          description: "",

          amount: "",
          date: "",

          note: "",
          id: "",
        }
      : {
          task: "",
          date: "",
          note: "",
          id: "",
        }
  );
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
    console.log(formData);
    if (Object.keys(formData).length === 0) {
      toast.error("Enter all fields");
      return;
    }
    if (params.id === undefined) {
      layouttype === "budget"
        ? addExpense({ ...formData, id: uuidv4() })
        : addtodo({ ...formData, id: uuidv4() });
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
    toast("Expense added successfully");
    history.push("/");
  };

  return (
    <div className={"inputwrapper1 " + theme}>
      <form className={"inputwrapper " + theme} onSubmit={handleSubmit}>
        <input
          className="expenseinput"
          type="text"
          placeholder={layouttype === "budget" ? "description" : "task"}
          name={layouttype === "budget" ? "description" : "task"}
          onChange={handleChange}
          value={layouttype === "budget" ? formData.description : formData.task}
        />
        {layouttype === "budget" ? (
          <input
            type="number"
            className="expenseinput"
            placeholder="Amount"
            name="amount"
            onChange={handleChange}
            value={formData.amount}
          />
        ) : (
          ""
        )}
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
          placeholder={
            layouttype === "budget"
              ? "Add a note for your expense"
              : "Add a note for your todo"
          }
          className="expenseinput textarea1"
          onChange={handleChange}
          value={formData.note}
        ></textarea>

        <button className="submitbtn" type="submit">
          {layouttype === "budget" ? "Save Expense" : "Save Todo"}
        </button>
        <ToastContainer />
      </form>
    </div>
  );
};

export default ExpenseForm;
