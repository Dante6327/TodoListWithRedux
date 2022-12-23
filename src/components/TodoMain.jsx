import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import TodoAdd from "./TodoAdd";
const MainDiv = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

const TitleDiv = styled.div`
  font-family: var(--font-GoogleRubikViny);
  font-size: 60px;
  color: #87ceeb;
`;

const TodoDiv = styled.div`
  width: 80vw;
  height: 500px;
  border: 2px solid black;
  border-radius: 10px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const TodoMain = () => {
  return (
    <MainDiv>
      <TodoDiv>
        <TitleDiv>To Do List!!</TitleDiv>
        <TodoItem />
        <TodoAdd />
      </TodoDiv>
    </MainDiv>
  );
};
export default TodoMain;
