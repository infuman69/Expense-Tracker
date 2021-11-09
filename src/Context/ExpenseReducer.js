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
        theme: !action.payload ? "light" : "dark",
      };
    case "EXTRACT_ITEM":
      return {
        ...state,
        foundobj: state.expenses.find((item) => {
          return item.id === action.payload;
        }),
      };
    case "REPLACE_WITH":
      state.expenses.forEach((element) => {
        if (element.id === action.payload.id) {
          element.description = action.payload.description;
          element.amount = action.payload.amount;
          element.date = action.payload.date;
          element.note = action.payload.note;
          console.log(element.description);
        }
      });
      return state;

    default:
      return state;
  }
};
