export default (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case "SET_THEME":
      return {
        ...state,
        theme:
          typeof action.payload === "boolean"
            ? !action.payload
              ? "light"
              : "dark"
            : typeof action.payload === "string"
            ? action.payload
            : "light",
      };
    case "EXTRACT_ITEM":
      return {
        ...state,
        foundobj:
          state.layouttype === "budget"
            ? state.expenses.find((item) => {
                return item.id === action.payload;
              })
            : state.todo.find((item) => {
                return item.id === action.payload;
              }),
      };
    case "REPLACE_WITH":
      state.layouttype === "budget"
        ? state.expenses.forEach((element) => {
            if (element.id === action.payload.id) {
              element.description = action.payload.description;
              element.amount = action.payload.amount;
              element.date = action.payload.date;
              element.note = action.payload.note;
              console.log(element.description);
            }
          })
        : state.todo.forEach((element) => {
            if (element.id === action.payload.id) {
              element.task = action.payload.task;
              element.date = action.payload.date;
              element.note = action.payload.note;
              console.log(element.description);
            }
          });
      return state;
    case "CHANGE_TYPE":
      return {
        ...state,
        settingstype: action.payload,
      };
    case "CHANGE_LAYOUT":
      return {
        ...state,
        layouttype: action.payload,
      };
    case "ADD_TODO":
      return {
        ...state,
        todo: [...state.todo, action.payload],
      };
    default:
      return state;
  }
};
