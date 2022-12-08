import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import TodoAdd from "./TodoAdd";
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
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const TodoMain = () => {
  const todos = useSelector((state) => state.todos);
  return (
    <MainDiv>
      <TodoDiv>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo.text}</li>
          ))}
        </ul>
        <TodoAdd />
      </TodoDiv>
    </MainDiv>
  );
};
export default TodoMain;
