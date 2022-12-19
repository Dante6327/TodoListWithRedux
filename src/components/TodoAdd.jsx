import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { IoIosAddCircle } from "react-icons/io";
import styled from "styled-components";

let cnt = 0; //todo의 고유 값
const InputArea = styled.div`
  position: absolute;
  width: 100%;
  bottom: 3px;
  margin: 0 auto;
  height: 50px;
  display: flex;
  justify-content: center;
`;

const InputElement = styled.input`
  width: 180px;
  height: 30px;
`;

export const StyledIoIosAddCircle = styled(IoIosAddCircle)`
  width: 30px;
  height: 40px;
  &:hover {
    cursor: pointer;
  }
  &:active {
    margin-left: 2px;
    margin-top: 1px;
    color: #808080;
  }
`;

function TodoAdd() {
  const [todoValue, setTodoValue] = useState("");
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setTodoValue(e.target.value);
  };
  const handleClick = () => {
    const obj = { id: cnt, text: todoValue, checked: false };
    dispatch({ type: "ADD_TODO", item: obj });
    setTodoValue("");
    cnt++;
  };
  return (
    <InputArea>
      <InputElement type="text" value={todoValue} onChange={handleChange} />
      <StyledIoIosAddCircle onClick={handleClick} />
    </InputArea>
  );
}

export default TodoAdd;
