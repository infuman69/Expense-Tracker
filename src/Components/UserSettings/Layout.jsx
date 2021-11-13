import React, { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalState";
import budget from "../../images/budgettrack.webp";
import todo from "../../images/todo.jpg";

const Layout = () => {
  let { layouttype, setlayout } = useContext(GlobalContext);
  const handleSelec = (e) => {
    let ulchild = e.target.parentElement.parentElement.children;

    for (let i = 0; i < ulchild.length; i++) {
      if (ulchild[i].classList.contains("focu")) {
        ulchild[i].classList.remove("focu");
      }
    }
    e.target.parentElement.classList.add("focu");
    setlayout(e.target.parentElement.classList[1].trim());
  };
  console.log(layouttype);

  return (
    <div className="layoutcard">
      <h1>Layout</h1>
      <div className="layopt">
        <div className="layopts budget focu" onClick={(e) => handleSelec(e)}>
          <h3 className="layhead"> Budget Tracker</h3>
          <img src={budget} className="budgetimg" />
        </div>
        <div className="layopts todo" onClick={(e) => handleSelec(e)}>
          <h3 className="layhead"> Todo - List</h3>
          <img src={todo} className="budgetimg" />
        </div>
      </div>
    </div>
  );
};
export default Layout;
