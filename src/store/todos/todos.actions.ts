import * as apiTodos from "../../api/todos";
import * as todoTypes from "./todos.types";

export const setTodosRequestStatusPending: todoTypes.SetTodosRequestStatusPendingActionCreator =
  () => ({
    type: todoTypes.SET_TODOS_REQUEST_STATUS_PENDING,
  });

export const setTodosRequestStatusFailure: todoTypes.SetTodosRequestStatusFailureActionCreator =
  () => ({
    type: todoTypes.SET_TODOS_REQUEST_STATUS_FAILURE,
  });

export const setTodosRequestSuccess: todoTypes.SetTodosRequestSuccessActionCreator =
  (todos) => ({
    type: todoTypes.SET_TODOS,
    payload: todos,
  });

export const setTodoRequestStatusPending: todoTypes.SetTodoRequestStatusPendingActionCreator =
  () => ({
    type: todoTypes.SET_TODO_REQUEST_STATUS_PENDING,
  });

export const setTodoRequestStatusFailure: todoTypes.SetTodoRequestStatusFailureActionCreator =
  () => ({
    type: todoTypes.SET_TODO_REQUEST_STATUS_FAILURE,
  });

export const setTodoRequestSuccess: todoTypes.SetTodoRequestSuccessActionCreator =
  (todo) => ({
    type: todoTypes.SET_TODO,
    payload: todo,
  });

export const getTodos: todoTypes.GetTodosThunk = () => {
  return (dispatch) => {
    dispatch(setTodosRequestStatusPending());

    apiTodos
      .getTodos()
      .then((todos) => dispatch(setTodosRequestSuccess(todos)))
      .catch(() => dispatch(setTodosRequestStatusFailure()));
  };
};
export const getTodo: todoTypes.GetTodoThunk = (id) => {
  return (dispatch) => {
    dispatch(setTodoRequestStatusPending());

    apiTodos
      .getTodo(id)
      .then((todo) => dispatch(setTodoRequestSuccess(todo)))
      .catch(() => dispatch(setTodoRequestStatusFailure()));
  };
};
