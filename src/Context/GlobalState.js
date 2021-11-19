import React, { createContext, useReducer } from "react";
import ExpenseReducer from "./ExpenseReducer";

const initialState = {
  expenses: [],
  theme: "light",
  foundobj: null,
  settingstype: "",
  layouttype: "budget",
  todo: [],
  userName: "Soham",
  sorttype: "",
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
  const deltodo = (id) => {
    dispatch({
      type: "DEL_TODO",
      payload: id,
    });
  };
  const delexpense = (id) => {
    dispatch({
      type: "DEL_EXPENSE",
      payload: id,
    });
  };
  const accname = (name) => {
    dispatch({
      type: "CHANGE_USER",
      payload: name,
    });
  };
  const changesorttype = (str) => {
    dispatch({
      type: "SORT_TYPE",
      payload: str,
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
        userName: state.userName,
        sorttype: state.sorttype,
        addExpense,
        settheme,
        extractitem,
        replacewithnew,
        changetype,
        setlayout,
        addtodo,
        deltodo,
        delexpense,
        accname,
        changesorttype,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
