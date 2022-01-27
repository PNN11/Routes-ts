import { postsReducer, initialState } from "../posts.reducer";
import {
  SET_POSTS_REQUEST_STATUS_PENDING,
  SET_POSTS_REQUEST_STATUS_FAILURE,
  SET_POST_COMMENTS_REQUEST_STATUS_FAILURE,
  SET_POST_COMMENTS_REQUEST_STATUS_PENDING,
  SET_POST_REQUEST_STATUS_FAILURE,
  SET_POST_REQUEST_STATUS_PENDING,
  SET_POST,
  SET_POSTS,
  SET_POST_COMMENTS,
  Actions,
} from "../posts.types";
import { Statuses } from "../../types";

describe("postReducer", () => {
  it("SET_POSTS_REQUEST_STATUS_PENDING", () => {
    const action = { type: SET_POSTS_REQUEST_STATUS_PENDING } as Actions;
    expect(postsReducer(initialState, action)).toEqual({
      ...initialState,
      postsRequestStatus: Statuses.PENDING,
    });
  });
  it("SET_POSTS_REQUEST_STATUS_FAILURE", () => {
    const action = { type: SET_POSTS_REQUEST_STATUS_FAILURE } as Actions;
    expect(postsReducer(initialState, action)).toEqual({
      ...initialState,
      postsRequestStatus: Statuses.FAILURE,
    });
  });
  it("SET_POST_COMMENTS_REQUEST_STATUS_FAILURE", () => {
    const action = {
      type: SET_POST_COMMENTS_REQUEST_STATUS_FAILURE,
    } as Actions;
    expect(postsReducer(initialState, action)).toEqual({
      ...initialState,
      postCommentsRequestStatus: Statuses.FAILURE,
    });
  });
  it("SET_POST_COMMENTS_REQUEST_STATUS_PENDING", () => {
    const action = {
      type: SET_POST_COMMENTS_REQUEST_STATUS_PENDING,
    } as Actions;
    expect(postsReducer(initialState, action)).toEqual({
      ...initialState,
      postCommentsRequestStatus: Statuses.PENDING,
    });
  });
  it("SET_POST_REQUEST_STATUS_FAILURE", () => {
    const action = { type: SET_POST_REQUEST_STATUS_FAILURE } as Actions;
    expect(postsReducer(initialState, action)).toEqual({
      ...initialState,
      postRequestStatus: Statuses.FAILURE,
    });
  });
  it("SET_POST_REQUEST_STATUS_PENDING", () => {
    const action = { type: SET_POST_REQUEST_STATUS_PENDING } as Actions;
    expect(postsReducer(initialState, action)).toEqual({
      ...initialState,
      postRequestStatus: Statuses.PENDING,
    });
  });
  it("SET_POSTS", () => {
    const action = {
      type: SET_POSTS,
      payload: [{ id: 1, title: "test" }],
    } as Actions;
    expect(postsReducer(initialState, action)).toEqual({
      ...initialState,
      postsRequestStatus: Statuses.SUCCESS,
      posts: [{ id: 1, title: "test" }],
    });
  });
  it("SET_POST", () => {
    const action = {
      type: SET_POST,
      payload: { id: 1, title: "test" },
    } as Actions;
    expect(postsReducer(initialState, action)).toEqual({
      ...initialState,
      postRequestStatus: Statuses.SUCCESS,
      post: { id: 1, title: "test" },
    });
  });
  it("SET_POST_COMMENTS", () => {
    const action = {
      type: SET_POST_COMMENTS,
      payload: [{ id: 1, name: "test" }],
    } as Actions;
    expect(postsReducer(initialState, action)).toEqual({
      ...initialState,
      postCommentsRequestStatus: Statuses.SUCCESS,
      postComments: [{ id: 1, name: "test" }],
    });
  });
});
