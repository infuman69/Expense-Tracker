import React from "react";
import SettingsOptions from "./SettingsOptions";
import SettingsWrapper from "./SettingsWrapper";

const Settings = () => {
  return (
    <div className="settings ">
      <div className="settings1">
        <SettingsOptions />
        <SettingsWrapper />
      </div>
    </div>
  );
};

export default Settings;
