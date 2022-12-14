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
    case "MODIFY_SET_TODO":
      state.map((todo) =>
        todo.item.id.toString() === action.id
          ? (todo.item.isModify = !todo.item.isModify)
          : todo.item.isModify
      );
      return state;
    case "MODIFY_TEXT":
      state.map((todo) =>
        todo.item.id.toString() === action.id
          ? (todo.item.text = action.value)
          : todo.item.text
      );
      return state;
    default:
      return state;
  }
};

export default todos;
