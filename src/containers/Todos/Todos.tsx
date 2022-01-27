import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSliceTodos, getTodos } from "../../store/todos";
import { CircularProgress, Container } from "@mui/material";
import Todo from "../../components/Todo/Todo";
import { Statuses } from "../../store/types";
import { useNavigate } from "react-router-dom";

const Todos: React.FC = () => {
  const { todos, todosRequestStatus } = useSelector(getSliceTodos);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (id: number) => {
    navigate(`/todos/${id}`);
  };

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  return (
    <Container>
      {todosRequestStatus === Statuses.PENDING && <CircularProgress />}
      {todosRequestStatus === Statuses.FAILURE && "some error..."}
      {todos &&
        todos.map((todo) => (
          <Todo key={todo.id} onClick={handleClick} {...todo} />
        ))}
    </Container>
  );
};

export default Todos;
