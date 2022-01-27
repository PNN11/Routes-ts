import { Statuses } from "../types";
import * as todoTypes from "./todos.types";

export const initialState: todoTypes.State = {
  todosRequestStatus: Statuses.UNCALLED,
  todos: [],
  todoRequestStatus: Statuses.UNCALLED,
  todo: null,
};

export const todosReducer = (
  state = initialState,
  action: todoTypes.Actions
) => {
  switch (action.type) {
    case todoTypes.SET_TODOS_REQUEST_STATUS_PENDING:
      return { ...state, todosRequestStatus: Statuses.PENDING };
    case todoTypes.SET_TODOS_REQUEST_STATUS_FAILURE:
      return { ...state, todosRequestStatus: Statuses.FAILURE };
    case todoTypes.SET_TODOS:
      return {
        ...state,
        todos: action.payload,
        todosRequestStatus: Statuses.SUCCESS,
      };

    case todoTypes.SET_TODO_REQUEST_STATUS_PENDING:
      return { ...state, todoRequestStatus: Statuses.PENDING };
    case todoTypes.SET_TODO_REQUEST_STATUS_FAILURE:
      return { ...state, todoRequestStatus: Statuses.FAILURE };
    case todoTypes.SET_TODO:
      return {
        ...state,
        todo: action.payload,
        todoRequestStatus: Statuses.SUCCESS,
      };
    default:
      return state;
  }
};
