import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { BsFillArrowRightSquareFill } from "react-icons/bs";

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

const ModifyConfirmBtn = styled(BsFillArrowRightSquareFill)`
  &:hover {
    cursor: pointer;
  }
`;

const ModifyInput = styled.input`
  font-size: 24px;
  text-align: center;
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
  width: 50%;
`;

function TodoItem() {
  /**store에 저장된 todos를 가져옴*/
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  /**체크박스 체크시 todo.checked를 설정*/
  const handleChange = (idx) => {
    dispatch({ type: "UPDATE_CHECKED", id: idx });
  };

  /**Item 삭제*/
  const handleDelete = (idx) => {
    dispatch({ type: "DELETE_TODO", id: idx });
  };

  /**수정 버튼 클릭시 dispatch => span을 input으로, input을 span으로 변경*/
  const handleModify = (e) => {
    const { id } = e.target;
    dispatch({ type: "MODIFY_SET_TODO", id: id });
  };

  /**수정시 input 내에 작성되는 text를 갱신함 */
  const handleModifyText = (e) => {
    const { id, value } = e.target;
    dispatch({ type: "MODIFY_TEXT", id: id, value: value });
  };

  return (
    <TodoList>
      {todos.map((todo) => (
        <Item key={todo.item.id} checked={todo.item.checked}>
          <CheckItem
            type="checkbox"
            onChange={() => handleChange(todo.item.id)}
          />
          {todo.item.isModify ? (
            <ModifyInput
              type="text"
              value={todo.item.text}
              id={todo.item.id}
              onChange={handleModifyText}
            />
          ) : (
            <span idx={todo.item.id}>{todo.item.text}</span>
          )}
          {todo.item.isModify ? (
            <BtnDiv>
              <ModifyConfirmBtn id={todo.item.id} onClick={handleModify} />
            </BtnDiv>
          ) : (
            <BtnDiv>
              <ModifyBtn id={todo.item.id} onClick={handleModify} />
              <DeleteBtn onClick={() => handleDelete(todo.item.id)} />
            </BtnDiv>
          )}
        </Item>
      ))}
    </TodoList>
  );
}

export default TodoItem;
