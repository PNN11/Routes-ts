import { Statuses } from "../types";
import * as userTypes from "./users.types";

export const initialState: userTypes.State = {
  usersRequestStatus: Statuses.UNCALLED,
  users: [],
  userRequestStatus: Statuses.UNCALLED,
  user: null,
};

export const usersReducer = (
  state = initialState,
  action: userTypes.Actions
) => {
  switch (action.type) {
    case userTypes.SET_USERS_REQUEST_STATUS_PENDING:
      return { ...state, usersRequestStatus: Statuses.PENDING };
    case userTypes.SET_USERS_REQUEST_STATUS_FAILURE:
      return { ...state, usersRequestStatus: Statuses.FAILURE };
    case userTypes.SET_USERS:
      return {
        ...state,
        users: action.payload,
        usersRequestStatus: Statuses.SUCCESS,
      };

    case userTypes.SET_USER_REQUEST_STATUS_PENDING:
      return { ...state, userRequestStatus: Statuses.PENDING };
    case userTypes.SET_USER_REQUEST_STATUS_FAILURE:
      return { ...state, userRequestStatus: Statuses.FAILURE };
    case userTypes.SET_USER:
      return {
        ...state,
        user: action.payload,
        userRequestStatus: Statuses.SUCCESS,
      };
    default:
      return state;
  }
};
