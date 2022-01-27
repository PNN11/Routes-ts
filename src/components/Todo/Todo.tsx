import React from "react";
import { Switch } from "@mui/material";
import { TodoWrapper } from "./TodoStyles";
import { TodoProps } from "./Todo.types";

const Todo: React.FC<TodoProps> = ({ title, completed, id, onClick }) => {
  const handleClick = () => {
    onClick(id);
  };
  return (
    <TodoWrapper completed={completed}>
      <h5 onClick={handleClick}>{title}</h5>
      <Switch defaultChecked={completed}></Switch>
    </TodoWrapper>
  );
};

export default Todo;
