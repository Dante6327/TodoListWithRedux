import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

const MainDiv = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

const TodoDiv = styled.div`
  width: 40vw;
  height: 500px;
  border: 2px solid black;
  border-radius: 10px;
  position: absolute;
`;

const TodoMain = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const [todoValue, setTodoValue] = useState("");

  const addTodo = (e) => {
    dispatch({ type: "ADD_TODO", text: todoValue });
    e.preventDefault();
    setTodoValue("");
  };
  const handleChange = (e) => {
    setTodoValue(e.target.value);
  };
  return (
    <MainDiv>
      <TodoDiv>
        <form onSubmit={addTodo}>
          <input type="text" value={todoValue} onChange={handleChange} />
          <input type="submit" />
        </form>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo.text}</li>
          ))}
        </ul>
      </TodoDiv>
    </MainDiv>
  );
};
export default TodoMain;
