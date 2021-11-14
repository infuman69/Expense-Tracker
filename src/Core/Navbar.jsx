import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { RiSunLine, RiMoonLine } from "react-icons/ri";
import { GlobalContext } from "../Context/GlobalState";
import { useContext } from "react";
import { FiSettings } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  let history = useHistory();
  const handleClick = () => {
    history.push("/");
  };
  let [toggle, settoggle] = useState(false);
  let { theme, settheme, layouttype, userName } = useContext(GlobalContext);
  const handleclick = () => {
    settoggle(!toggle);
    settheme(!toggle);
    !toggle ? toast("dark theme applied") : toast("light theme applied");
  };
  const handleSettings = () => {
    history.push("/settings");
  };
  console.log(layouttype);
  return (
    <div className={"navbar " + theme}>
      <div className="container navbar-wrapper">
        <h1 onClick={handleClick}>
          {layouttype === "budget" ? "Budget App" : "Todo App"}
        </h1>
        <div className="icons">
          <span className="theme">
            {!toggle ? (
              <RiSunLine
                size={28}
                style={{ cursor: "pointer" }}
                onClick={handleclick}
              />
            ) : (
              <RiMoonLine
                size={28}
                style={{ cursor: "pointer", margin: "0px 10px" }}
                onClick={handleclick}
              />
            )}
          </span>
          <span>
            <h3 style={{ marginLeft: "10px" }}>{userName}</h3>
          </span>
          <span className="settings2" style={{ marginLeft: "20px" }}>
            <FiSettings
              size={28}
              onClick={handleSettings}
              style={{ cursor: "pointer" }}
            />
          </span>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
