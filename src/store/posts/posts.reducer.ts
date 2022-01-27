import { Statuses } from "../types";
import * as postTypes from "./posts.types";

export const initialState: postTypes.State = {
  postsRequestStatus: Statuses.UNCALLED,
  posts: [],
  postRequestStatus: Statuses.UNCALLED,
  post: null,
  postCommentsRequestStatus: Statuses.UNCALLED,
  postComments: [],
};

export const postsReducer = (
  state = initialState,
  action: postTypes.Actions
): postTypes.State => {
  switch (action.type) {
    case postTypes.SET_POSTS_REQUEST_STATUS_PENDING:
      return { ...state, postsRequestStatus: Statuses.PENDING };
    case postTypes.SET_POSTS:
      return {
        ...state,
        posts: action.payload,
        postsRequestStatus: Statuses.SUCCESS,
      };
    case postTypes.SET_POSTS_REQUEST_STATUS_FAILURE:
      return { ...state, postsRequestStatus: Statuses.FAILURE };
    case postTypes.SET_POST_REQUEST_STATUS_PENDING:
      return { ...state, postRequestStatus: Statuses.PENDING };
    case postTypes.SET_POST_REQUEST_STATUS_FAILURE:
      return { ...state, postRequestStatus: Statuses.FAILURE };
    case postTypes.SET_POST:
      return {
        ...state,
        post: action.payload,
        postRequestStatus: Statuses.SUCCESS,
      };
    case postTypes.SET_POST_COMMENTS_REQUEST_STATUS_FAILURE:
      return { ...state, postCommentsRequestStatus: Statuses.FAILURE };
    case postTypes.SET_POST_COMMENTS_REQUEST_STATUS_PENDING:
      return { ...state, postCommentsRequestStatus: Statuses.PENDING };
    case postTypes.SET_POST_COMMENTS:
      return {
        ...state,
        postComments: action.payload,
        postCommentsRequestStatus: Statuses.SUCCESS,
      };
    default:
      return state;
  }
};
