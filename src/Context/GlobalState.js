import React, { createContext, useReducer } from "react";
import ExpenseReducer from "./ExpenseReducer";

const initialState = {
  expenses: [],
  theme: "light",
  foundobj: null,
  settingstype: "",
};
export const GlobalContext = createContext(initialState);

const GlobalState = ({ children }) => {
  let [state, dispatch] = useReducer(ExpenseReducer, initialState);

  const addExpense = (data) => {
    dispatch({
      type: "ADD_EXPENSE",
      payload: data,
    });
  };
  const settheme = (toggle) => {
    dispatch({
      type: "SET_THEME",
      payload: toggle,
    });
  };
  const extractitem = (id) => {
    dispatch({
      type: "EXTRACT_ITEM",
      payload: id,
    });
  };
  const replacewithnew = (obj) => {
    dispatch({
      type: "REPLACE_WITH",
      payload: obj,
    });
  };
  const changetype = (str) => {
    dispatch({
      type: "CHANGE_TYPE",
      payload: str,
    });
  };
  return (
    <GlobalContext.Provider
      value={{
        expenses: state.expenses,
        theme: state.theme,
        foundobj: state.foundobj,
        settingstype: state.settingstype,
        addExpense,
        settheme,
        extractitem,
        replacewithnew,
        changetype,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
