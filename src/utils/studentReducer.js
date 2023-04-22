export const studentReducer = (initialState, action) => {
  switch (action.type) {
    case "Add Student":
      return [...initialState, action.payload];
    case "Remove Student":
      return new Error("Action.type = Remove Student no esta iplementada");
    default:
      return initialState;
  }
};
