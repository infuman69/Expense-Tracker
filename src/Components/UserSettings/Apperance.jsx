import React, { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalState";

const Apperance = () => {
  let { theme, settheme } = useContext(GlobalContext);
  const handletheme = (e) => {
    settheme(e.target.textContent.trim());
    console.log(theme);
  };
  return (
    <div className="appearcard">
      <h1>Appearance</h1>
      <label htmlFor="" className="appearlab">
        Choose your desired theme
      </label>
      <ul className="themescont">
        <li className="blue" onClick={(e) => handletheme(e)}>
          Blue
        </li>
        <li className="green" onClick={(e) => handletheme(e)}>
          Green
        </li>
        <li className="purple" onClick={(e) => handletheme(e)}>
          Purple
        </li>
      </ul>
    </div>
  );
};

export default Apperance;
