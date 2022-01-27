import { todosReducer, initialState } from "../todos.reducer";
import {
  SET_TODOS_REQUEST_STATUS_PENDING,
  SET_TODOS_REQUEST_STATUS_FAILURE,
  SET_TODO_REQUEST_STATUS_FAILURE,
  SET_TODO_REQUEST_STATUS_PENDING,
  SET_TODO,
  SET_TODOS,
  Actions,
} from "../todos.types";
import { Statuses } from "../../types";

describe("todosReducer", () => {
  it("SET_TODOS_REQUEST_STATUS_PENDING", () => {
    const action = { type: SET_TODOS_REQUEST_STATUS_PENDING } as Actions;
    expect(todosReducer(initialState, action)).toEqual({
      ...initialState,
      todosRequestStatus: Statuses.PENDING,
    });
  });
  it("SET_TODOS_REQUEST_STATUS_FAILURE", () => {
    const action = { type: SET_TODOS_REQUEST_STATUS_FAILURE } as Actions;
    expect(todosReducer(initialState, action)).toEqual({
      ...initialState,
      todosRequestStatus: Statuses.FAILURE,
    });
  });
  it("SET_TODO_REQUEST_STATUS_FAILURE", () => {
    const action = { type: SET_TODO_REQUEST_STATUS_FAILURE } as Actions;
    expect(todosReducer(initialState, action)).toEqual({
      ...initialState,
      todoRequestStatus: Statuses.FAILURE,
    });
  });
  it("SET_TODO_REQUEST_STATUS_PENDING", () => {
    const action = { type: SET_TODO_REQUEST_STATUS_PENDING } as Actions;
    expect(todosReducer(initialState, action)).toEqual({
      ...initialState,
      todoRequestStatus: Statuses.PENDING,
    });
  });
  it("SET_TODOS", () => {
    const action = {
      type: SET_TODOS,
      payload: [{ id: 1, title: "test" }],
    } as Actions;
    expect(todosReducer(initialState, action)).toEqual({
      ...initialState,
      todosRequestStatus: Statuses.SUCCESS,
      todos: [{ id: 1, title: "test" }],
    });
  });
  it("SET_TODO", () => {
    const action = {
      type: SET_TODO,
      payload: { id: 1, title: "test" },
    } as Actions;
    expect(todosReducer(initialState, action)).toEqual({
      ...initialState,
      todoRequestStatus: Statuses.SUCCESS,
      todo: { id: 1, title: "test" },
    });
  });
});
