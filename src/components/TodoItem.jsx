import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const TodoList = styled.ul`
  list-style: none;
  padding: 0;
`;

const Item = styled.li`
  margin: 4px;
  border: 3px solid #87ceeb;
  border-radius: 5px;
  font-family: var(--font-GoogleSecularOne);
`;

const CheckItem = styled.input`
  float: left;
`;

function TodoItem() {
  const todos = useSelector((state) => state.todos);
  return (
    <TodoList>
      {todos.map((todo, index) => (
        <Item key={index}>
          <CheckItem type="checkbox" />
          {todo.text}
        </Item>
      ))}
    </TodoList>
  );
}

export default TodoItem;
