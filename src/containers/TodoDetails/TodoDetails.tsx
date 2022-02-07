import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSliceTodos, getTodo } from "../../store/todos";
import { getUser, getSliceUsers } from "../../store/users";
import { useParams, Link } from "react-router-dom";
import { Statuses } from "../../store/types";
import { TodoWrapper } from "../../components/Todo/TodoStyles";

import { UserInfoWrapper, TodoDetailWrapper } from "./TodoDetailsStyle";

import { CircularProgress, Switch } from "@mui/material";

const TodoDetails: React.FC = () => {
  const params = useParams<{ id?: string }>();
  const dispatch = useDispatch();
  const { todo, todoRequestStatus } = useSelector(getSliceTodos);
  const { user, userRequestStatus } = useSelector(getSliceUsers);

  useEffect(() => {
    if (params.id) {
      dispatch(getTodo(Number(params.id)));
    }
  }, [dispatch, params.id]);

  useEffect(() => {
    if (todo?.userId) {
      dispatch(getUser(todo.userId));
    }
  }, [todo?.userId, dispatch]);

  const loading = todoRequestStatus === Statuses.PENDING;

  const error = todoRequestStatus === Statuses.FAILURE;

  return (
    <TodoDetailWrapper>
      {loading && <CircularProgress />}
      {error && "some error..."}
      {!loading && !error && todo && (
        <>
          <Link to="/todos">Back</Link>
          {userRequestStatus === Statuses.PENDING && <CircularProgress />}
          {userRequestStatus === Statuses.FAILURE && "some error..."}
          {user && (
            <UserInfoWrapper>
              <Link to={`/users/${user.id}`}>Author: {user.name}</Link>
            </UserInfoWrapper>
          )}
          <TodoWrapper completed={todo.completed}>
            <h5>{todo.title}</h5>
            <Switch defaultChecked={todo.completed}></Switch>
          </TodoWrapper>
        </>
      )}
    </TodoDetailWrapper>
  );
};

export default TodoDetails;
