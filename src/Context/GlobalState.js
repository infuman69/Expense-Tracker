import React, { createContext, useReducer } from "react";
import ExpenseReducer from "./ExpenseReducer";

const initialState = {
  expenses: [],
  theme: "light",
  foundobj: null,
  settingstype: "",
  layouttype: "budget",
  todo: [],
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
  const setlayout = (str) => {
    dispatch({
      type: "CHANGE_LAYOUT",
      payload: str,
    });
  };
  const addtodo = (data) => {
    dispatch({
      type: "ADD_TODO",
      payload: data,
    });
  };
  return (
    <GlobalContext.Provider
      value={{
        expenses: state.expenses,
        todo: state.todo,
        theme: state.theme,
        foundobj: state.foundobj,
        settingstype: state.settingstype,
        layouttype: state.layouttype,
        addExpense,
        settheme,
        extractitem,
        replacewithnew,
        changetype,
        setlayout,
        addtodo,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
