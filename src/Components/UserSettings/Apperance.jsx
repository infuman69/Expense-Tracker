import React from "react";

const Apperance = () => {
  return (
    <div className="appearcard">
      <h1>Appearance</h1>
      <label htmlFor="" className="appearlab">
        Choose your desired theme
      </label>
      <ul className="themescont">
        <li className="Blue">Blue</li>
        <li className="Green">Green Yellow</li>
        <li className="Purple">Purple</li>
      </ul>
    </div>
  );
};

export default Apperance;
