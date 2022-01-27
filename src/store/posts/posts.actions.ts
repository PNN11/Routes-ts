import * as apiPosts from "../../api/posts";
import * as postTypes from "./posts.types";

export const setPostsRequestStatusPending: postTypes.SetPostsRequestStatusPendingActionCreator =
  () => ({
    type: postTypes.SET_POSTS_REQUEST_STATUS_PENDING,
  });

export const setPostsRequestSuccess: postTypes.SetPostsRequestSuccessActionCreator =
  (posts) => ({
    type: postTypes.SET_POSTS,
    payload: posts,
  });

export const setPostsRequestStatusFailure: postTypes.SetPostsRequestStatusFailureActionCreator =
  () => ({
    type: postTypes.SET_POSTS_REQUEST_STATUS_FAILURE,
  });
export const setPostRequestStatusPending: postTypes.SetPostRequestStatusPendingActionCreator =
  () => ({
    type: postTypes.SET_POST_REQUEST_STATUS_PENDING,
  });

export const setPostRequestSuccess: postTypes.SetPostRequestSuccessActionCreator =
  (post) => ({
    type: postTypes.SET_POST,
    payload: post,
  });

export const setPostRequestStatusFailure: postTypes.SetPostRequestStatusFailureActionCreator =
  () => ({
    type: postTypes.SET_POST_REQUEST_STATUS_FAILURE,
  });
export const setPostCommentsRequestStatusPending: postTypes.SetPostCommentsRequestStatusPendingActionCreator =
  () => ({
    type: postTypes.SET_POST_COMMENTS_REQUEST_STATUS_PENDING,
  });

export const setPostCommentsRequestSuccess: postTypes.SetPostCommentsRequestSuccessActionCreator =
  (comments) => ({
    type: postTypes.SET_POST_COMMENTS,
    payload: comments,
  });

export const setPostCommentsRequestStatusFailure: postTypes.SetPostCommentsRequestStatusFailureActionCreator =
  () => ({
    type: postTypes.SET_POST_COMMENTS_REQUEST_STATUS_FAILURE,
  });

export const getPosts: postTypes.GetPostsThunk = () => {
  return (dispatch) => {
    dispatch(setPostsRequestStatusPending());

    apiPosts
      .getPosts()
      .then((posts) => dispatch(setPostsRequestSuccess(posts)))
      .catch(() => dispatch(setPostsRequestStatusFailure()));
  };
};
export const getPost: postTypes.GetPostThunk = (id) => {
  return (dispatch) => {
    dispatch(setPostRequestStatusPending());

    apiPosts
      .getPost(id)
      .then((post) => dispatch(setPostRequestSuccess(post)))
      .catch(() => dispatch(setPostRequestStatusFailure()));
  };
};
export const getComments: postTypes.GetPostCommentsThunk = (id) => {
  return (dispatch) => {
    dispatch(setPostCommentsRequestStatusPending());

    apiPosts
      .getComments(id)
      .then((comments) => dispatch(setPostCommentsRequestSuccess(comments)))
      .catch(() => dispatch(setPostCommentsRequestStatusFailure()));
  };
};
