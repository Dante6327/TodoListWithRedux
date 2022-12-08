const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action];
    default:
      return state;
  }
};

export default todos;
