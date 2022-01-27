import { Post, PostComment } from "api/posts.types";
import { ThunkAction } from "redux-thunk";
import { Statuses } from "store/types";

export interface State {
  readonly postsRequestStatus: Statuses;
  readonly posts: Post[];
  readonly postRequestStatus: Statuses;
  readonly post: Post | null;
  readonly postCommentsRequestStatus: Statuses;
  readonly postComments: PostComment[];
}

export const SET_POSTS_REQUEST_STATUS_PENDING =
  "SET_POSTS_REQUEST_STATUS_PENDING";

export const SET_POSTS_REQUEST_STATUS_FAILURE =
  "SET_POSTS_REQUEST_STATUS_FAILURE";

export const SET_POSTS = "SET_POSTS";

export const SET_POST_REQUEST_STATUS_PENDING =
  "SET_POST_REQUEST_STATUS_PENDING";

export const SET_POST_REQUEST_STATUS_FAILURE =
  "SET_POST_REQUEST_STATUS_FAILURE";

export const SET_POST = "SET_POST";

export const SET_POST_COMMENTS_REQUEST_STATUS_PENDING =
  "SET_POST_COMMENTS_REQUEST_STATUS_PENDING";

export const SET_POST_COMMENTS_REQUEST_STATUS_FAILURE =
  "SET_POST_COMMENTS_REQUEST_STATUS_FAILURE";

export const SET_POST_COMMENTS = "SET_POST_COMMENTS";

export type SetPostsRequestStatusPendingAction = {
  type: typeof SET_POSTS_REQUEST_STATUS_PENDING;
};

export type SetPostsRequestStatusPendingActionCreator =
  () => SetPostsRequestStatusPendingAction;

export type SetPostsRequestStatusFailureAction = {
  type: typeof SET_POSTS_REQUEST_STATUS_FAILURE;
};

export type SetPostsRequestStatusFailureActionCreator =
  () => SetPostsRequestStatusFailureAction;

export type SetPostsRequestSuccessAction = {
  type: typeof SET_POSTS;
  payload: Post[];
};

export type SetPostsRequestSuccessActionCreator = (
  posts: Post[]
) => SetPostsRequestSuccessAction;

export type SetPostRequestStatusPendingAction = {
  type: typeof SET_POST_REQUEST_STATUS_PENDING;
};

export type SetPostRequestStatusPendingActionCreator =
  () => SetPostRequestStatusPendingAction;

export type SetPostRequestStatusFailureAction = {
  type: typeof SET_POST_REQUEST_STATUS_FAILURE;
};

export type SetPostRequestStatusFailureActionCreator =
  () => SetPostRequestStatusFailureAction;

export type SetPostRequestSuccessAction = {
  type: typeof SET_POST;
  payload: Post;
};

export type SetPostRequestSuccessActionCreator = (
  post: Post
) => SetPostRequestSuccessAction;

export type SetPostCommentsRequestStatusPendingAction = {
  type: typeof SET_POST_COMMENTS_REQUEST_STATUS_PENDING;
};

export type SetPostCommentsRequestStatusPendingActionCreator =
  () => SetPostCommentsRequestStatusPendingAction;

export type SetPostCommentsRequestStatusFailureAction = {
  type: typeof SET_POST_COMMENTS_REQUEST_STATUS_FAILURE;
};

export type SetPostCommentsRequestStatusFailureActionCreator =
  () => SetPostCommentsRequestStatusFailureAction;

export type SetPostCommentsRequestSuccessAction = {
  type: typeof SET_POST_COMMENTS;
  payload: PostComment[];
};

export type SetPostCommentsRequestSuccessActionCreator = (
  comments: PostComment[]
) => SetPostCommentsRequestSuccessAction;

export type Actions =
  | SetPostsRequestStatusPendingAction
  | SetPostsRequestSuccessAction
  | SetPostsRequestStatusFailureAction
  | SetPostRequestStatusPendingAction
  | SetPostRequestStatusFailureAction
  | SetPostRequestSuccessAction
  | SetPostCommentsRequestStatusPendingAction
  | SetPostCommentsRequestStatusFailureAction
  | SetPostCommentsRequestSuccessAction;

export type GetPostThunk = (
  id: number
) => ThunkAction<void, State, number, Actions>;

export type GetPostsThunk = () => ThunkAction<void, State, void, Actions>;

export type GetPostCommentsThunk = (
  id: number
) => ThunkAction<void, State, number, Actions>;
