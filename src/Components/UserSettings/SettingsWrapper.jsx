import React, { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalState";
import Account from "./Account";
import Apperance from "./Apperance";
import Layout from "./Layout";

const SettingsWrapper = () => {
  let { settingstype } = useContext(GlobalContext);
  if (settingstype === "Account") {
    return <Account />;
  } else if (settingstype === "Appearance") {
    return <Apperance />;
  } else if (settingstype === "Layout") {
    return <Layout />;
  } else {
    return <Account />;
  }
};

export default SettingsWrapper;
