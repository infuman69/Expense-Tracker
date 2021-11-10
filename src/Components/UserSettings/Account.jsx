import React from "react";

const Account = () => {
  return (
    <div className="accountcard">
      <h1>Account</h1>
      <form>
        <label htmlFor="">Name:</label>
        <input type="text" className="accinput" placeholder="Enter the Name" />
        <button type="submit" className="namebtn">
          Change Name
        </button>
      </form>
    </div>
  );
};

export default Account;
