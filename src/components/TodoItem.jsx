import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const TodoList = styled.ul`
  list-style: none;
  padding: 0;
`;

const Item = styled.li`
  font-size: 25px;
  margin: 4px;
  border: 3px solid #87ceeb;
  border-radius: 5px;
  font-family: var(--font-GoogleSecularOne);
  text-decoration: ${(props) => props.checked && "line-through"};
`;

const CheckItem = styled.input`
  width: 25px;
  height: 25px;
  float: left;
`;

function TodoItem() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const handleChange = (idx) => {
    dispatch({ type: "UPDATE_CHECKED", id: idx });
  };
  return (
    <TodoList>
      {todos.map((todo) => (
        <Item key={todo.item.id} checked={todo.item.checked}>
          <CheckItem
            type="checkbox"
            onChange={() => handleChange(todo.item.id)}
          />
          {todo.item.text}
        </Item>
      ))}
    </TodoList>
  );
}

export default TodoItem;
