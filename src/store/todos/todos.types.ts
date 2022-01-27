import { Todo } from "api/todos.types";
import { ThunkAction } from "redux-thunk";
import { Statuses } from "store/types";

export interface State {
  readonly todosRequestStatus: Statuses;
  readonly todos: Todo[];
  readonly todoRequestStatus: Statuses;
  readonly todo: Todo | null;
}

export const SET_TODOS_REQUEST_STATUS_PENDING =
  "SET_TODOS_REQUEST_STATUS_PENDING";

export const SET_TODOS_REQUEST_STATUS_FAILURE =
  "SET_TODOS_REQUEST_STATUS_FAILURE";

export const SET_TODOS = "SET_TODOS";

export const SET_TODO_REQUEST_STATUS_PENDING =
  "SET_TODO_REQUEST_STATUS_PENDING";

export const SET_TODO_REQUEST_STATUS_FAILURE =
  "SET_TODO_REQUEST_STATUS_FAILURE";

export const SET_TODO = "SET_TODO";

export type SetTodosRequestStatusPendingAction = {
  type: typeof SET_TODOS_REQUEST_STATUS_PENDING;
};

export type SetTodosRequestStatusPendingActionCreator =
  () => SetTodosRequestStatusPendingAction;

export type SetTodosRequestStatusFailureAction = {
  type: typeof SET_TODOS_REQUEST_STATUS_FAILURE;
};

export type SetTodosRequestStatusFailureActionCreator =
  () => SetTodosRequestStatusFailureAction;

export type SetTodosRequestSuccessAction = {
  type: typeof SET_TODOS;
  payload: Todo[];
};

export type SetTodosRequestSuccessActionCreator = (
  todos: Todo[]
) => SetTodosRequestSuccessAction;

export type SetTodoRequestStatusPendingAction = {
  type: typeof SET_TODO_REQUEST_STATUS_PENDING;
};

export type SetTodoRequestStatusPendingActionCreator =
  () => SetTodoRequestStatusPendingAction;

export type SetTodoRequestStatusFailureAction = {
  type: typeof SET_TODO_REQUEST_STATUS_FAILURE;
};

export type SetTodoRequestStatusFailureActionCreator =
  () => SetTodoRequestStatusFailureAction;

export type SetTodoRequestSuccessAction = {
  type: typeof SET_TODO;
  payload: Todo;
};

export type SetTodoRequestSuccessActionCreator = (
  todo: Todo
) => SetTodoRequestSuccessAction;

export type Actions =
  | SetTodosRequestStatusPendingAction
  | SetTodosRequestSuccessAction
  | SetTodosRequestStatusFailureAction
  | SetTodoRequestStatusPendingAction
  | SetTodoRequestStatusFailureAction
  | SetTodoRequestSuccessAction;

export type GetTodoThunk = (
  id: number
) => ThunkAction<void, State, number, Actions>;

export type GetTodosThunk = () => ThunkAction<void, State, void, Actions>;
