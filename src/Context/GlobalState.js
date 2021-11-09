import React, { createContext, useReducer } from "react";
import ExpenseReducer from "./ExpenseReducer";

const initialState = {
  expenses: [],
  theme: "light",
  foundobj: null,
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

  return (
    <GlobalContext.Provider
      value={{
        expenses: state.expenses,
        theme: state.theme,
        foundobj: state.foundobj,
        addExpense,
        settheme,
        extractitem,
        replacewithnew,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
