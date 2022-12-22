const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action];
    case "UPDATE_CHECKED":
      state.map((todo) =>
        todo.item.id === action.id
          ? (todo.item.checked = !todo.item.checked)
          : todo.item.checked
      );
      return state;
    case "DELETE_TODO":
      state = state.filter((todo) => todo.item.id !== action.id);
      return state;
    default:
      return state;
  }
};

export default todos;
