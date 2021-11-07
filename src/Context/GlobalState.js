import React,{createContext,useReducer} from 'react'
import ExpenseReducer from './ExpenseReducer'



const initialState={
    expenses:[],
    theme:"light"
}
export const GlobalContext=createContext(initialState)

const GlobalState = ({children}) => {

  let [state, dispatch]=useReducer(ExpenseReducer,initialState)

  const addExpense=(data)=>{
    dispatch({
      type:'ADD_EXPENSE',
      payload:data
    })
  }
  const settheme=(toggle)=>{
    dispatch({
      type:'SET_THEME',
      payload:toggle
    })
  }

    return (
        <GlobalContext.Provider
        value={{
            expenses:state.expenses,
            theme:state.theme,
            class:state.class,
            addExpense,
            settheme,
        }}>
        
          {children}

        </GlobalContext.Provider>
    )
}

export default GlobalState