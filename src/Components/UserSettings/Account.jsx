import React, { useState, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalContext } from "../../Context/GlobalState";

const Account = () => {
  let { userName, accname } = useContext(GlobalContext);
  let [username, setname] = useState("");
  const handlechange = (e) => {
    setname(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.length === 0) {
      toast.error("Enter the Username in the field");
      return;
    }
    accname(username);
    toast("Username Successfully changed");
    setname("");
  };
  return (
    <div className="accountcard">
      <h1>Account</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Name:</label>
        <input
          type="text"
          className="accinput"
          placeholder="Enter the Name"
          name="userName"
          onChange={(e) => handlechange(e)}
          value={username}
        />
        <button type="submit" className="namebtn">
          Change Name
        </button>
        <ToastContainer />
      </form>
    </div>
  );
};

export default Account;
