import React, { useState } from "react";
import { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalState";

const SettingsOptions = () => {
  let { changetype } = useContext(GlobalContext);

  const handleClicked = (e) => {
    let ulchild = e.target.parentElement.children;

    for (let i = 0; i < ulchild.length; i++) {
      if (ulchild[i].classList.contains("clicked")) {
        ulchild[i].classList.remove("clicked");
      }
    }
    e.target.classList.add("clicked");

    changetype(e.target.textContent.trim());
  };
  return (
    <div className="settingsoptions">
      <h2>Options</h2>
      <ul>
        <li className="clicked options" onClick={(e) => handleClicked(e)}>
          Account
        </li>
        <li className="options" onClick={(e) => handleClicked(e)}>
          Appearance
        </li>
        <li className="options" onClick={(e) => handleClicked(e)}>
          Layout
        </li>
      </ul>
    </div>
  );
};

export default SettingsOptions;
