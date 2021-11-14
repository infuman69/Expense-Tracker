import React, { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalState";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Apperance = () => {
  let { theme, settheme } = useContext(GlobalContext);
  const handletheme = (e) => {
    let ulchild = e.target.parentElement.children;

    for (let i = 0; i < ulchild.length; i++) {
      if (ulchild[i].classList.contains("selected")) {
        ulchild[i].classList.remove("selected");
      }
    }
    e.target.classList.add("selected");
    settheme(e.target.textContent.trim());
    toast(`${e.target.textContent.trim()} theme applied`);
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
