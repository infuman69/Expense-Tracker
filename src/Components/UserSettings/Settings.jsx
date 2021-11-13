import React, { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalState";
import SettingsOptions from "./SettingsOptions";
import SettingsWrapper from "./SettingsWrapper";

const Settings = () => {
  let { theme } = useContext(GlobalContext);
  return (
    <div className={"settings " + theme}>
      <div className="settings1">
        <SettingsOptions />
        <SettingsWrapper />
      </div>
    </div>
  );
};

export default Settings;
