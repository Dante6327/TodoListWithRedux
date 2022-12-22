import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import TodoUpdate from "./TodoUpdate";

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
  margin-top: 5px;
`;

const BtnDiv = styled.div`
  float: right;
  margin-top: 5px;
  margin-right: 10px;
`;

const DeleteBtn = styled(RiDeleteBin6Line)`
  &:hover {
    cursor: pointer;
  }
`;

const ModifyBtn = styled(MdOutlineDriveFileRenameOutline)`
  &:hover {
    cursor: pointer;
  }
`;

function TodoItem() {
  const [isModify, setIsModify] = useState(false);
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const handleChange = (idx) => {
    dispatch({ type: "UPDATE_CHECKED", id: idx });
  };
  const handleDelete = (idx) => {
    dispatch({ type: "DELETE_TODO", id: idx });
  };
  const handleModify = (idx) => {
    dispatch({ type: "MODIFY_TODO", id: idx });
  };

  return (
    <TodoList>
      {todos.map((todo) => (
        <Item key={todo.item.id} checked={todo.item.checked}>
          <CheckItem
            type="checkbox"
            onChange={() => handleChange(todo.item.id)}
          />
          <span>{todo.item.text}</span>
          <BtnDiv>
            <DeleteBtn onClick={() => handleDelete(todo.item.id)} />
            <ModifyBtn onClick={() => handleModify(todo.item.id)} />
          </BtnDiv>
        </Item>
      ))}
    </TodoList>
  );
}

export default TodoItem;
