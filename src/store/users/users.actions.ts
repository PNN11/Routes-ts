import * as apiUsers from "../../api/users";
import * as userTypes from "./users.types";

export const setUsersRequestStatusPending: userTypes.SetUsersRequestStatusPendingActionCreator =
  () => ({
    type: userTypes.SET_USERS_REQUEST_STATUS_PENDING,
  });

export const setUsersRequestSuccess: userTypes.SetUsersRequestSuccessActionCreator =
  (users) => ({
    type: userTypes.SET_USERS,
    payload: users,
  });

export const setUsersRequestStatusFailure: userTypes.SetUsersRequestStatusFailureActionCreator =
  () => ({
    type: userTypes.SET_USERS_REQUEST_STATUS_FAILURE,
  });
export const setUserRequestStatusPending: userTypes.SetUserRequestStatusPendingActionCreator =
  () => ({
    type: userTypes.SET_USER_REQUEST_STATUS_PENDING,
  });

export const setUserRequestSuccess: userTypes.SetUserRequestSuccessActionCreator =
  (user) => ({
    type: userTypes.SET_USER,
    payload: user,
  });

export const setUserRequestStatusFailure: userTypes.SetUserRequestStatusFailureActionCreator =
  () => ({
    type: userTypes.SET_USER_REQUEST_STATUS_FAILURE,
  });

export const getUsers: userTypes.GetUsersThunk = () => {
  return (dispatch) => {
    dispatch(setUsersRequestStatusPending());

    apiUsers
      .getUsers()
      .then((users) => dispatch(setUsersRequestSuccess(users)))
      .catch(() => dispatch(setUsersRequestStatusFailure()));
  };
};
export const getUser: userTypes.GetUserThunk = (id) => {
  return (dispatch) => {
    dispatch(setUserRequestStatusPending());

    apiUsers
      .getUser(id)
      .then((user) => dispatch(setUserRequestSuccess(user)))
      .catch(() => dispatch(setUserRequestStatusFailure()));
  };
};
