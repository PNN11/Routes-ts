import { User } from "api/users.types";
import { ThunkAction } from "redux-thunk";
import { Statuses } from "store/types";

export interface State {
  readonly usersRequestStatus: Statuses;
  readonly users: User[];
  readonly userRequestStatus: Statuses;
  readonly user: User | null;
}

export const SET_USERS_REQUEST_STATUS_PENDING =
  "SET_USERS_REQUEST_STATUS_PENDING";

export const SET_USERS_REQUEST_STATUS_FAILURE =
  "SET_USERS_REQUEST_STATUS_FAILURE";

export const SET_USERS = "SET_USERS";

export const SET_USER_REQUEST_STATUS_PENDING =
  "SET_USER_REQUEST_STATUS_PENDING";

export const SET_USER_REQUEST_STATUS_FAILURE =
  "SET_USER_REQUEST_STATUS_FAILURE";

export const SET_USER = "SET_USER";

export type SetUsersRequestStatusPendingAction = {
  type: typeof SET_USERS_REQUEST_STATUS_PENDING;
};

export type SetUsersRequestStatusPendingActionCreator =
  () => SetUsersRequestStatusPendingAction;

export type SetUsersRequestStatusFailureAction = {
  type: typeof SET_USERS_REQUEST_STATUS_FAILURE;
};

export type SetUsersRequestStatusFailureActionCreator =
  () => SetUsersRequestStatusFailureAction;

export type SetUsersRequestSuccessAction = {
  type: typeof SET_USERS;
  payload: User[];
};

export type SetUsersRequestSuccessActionCreator = (
  users: User[]
) => SetUsersRequestSuccessAction;

export type SetUserRequestStatusPendingAction = {
  type: typeof SET_USER_REQUEST_STATUS_PENDING;
};

export type SetUserRequestStatusPendingActionCreator =
  () => SetUserRequestStatusPendingAction;

export type SetUserRequestStatusFailureAction = {
  type: typeof SET_USER_REQUEST_STATUS_FAILURE;
};

export type SetUserRequestStatusFailureActionCreator =
  () => SetUserRequestStatusFailureAction;

export type SetUserRequestSuccessAction = {
  type: typeof SET_USER;
  payload: User;
};

export type SetUserRequestSuccessActionCreator = (
  user: User
) => SetUserRequestSuccessAction;

export type Actions =
  | SetUsersRequestStatusPendingAction
  | SetUsersRequestSuccessAction
  | SetUsersRequestStatusFailureAction
  | SetUserRequestStatusPendingAction
  | SetUserRequestStatusFailureAction
  | SetUserRequestSuccessAction;

export type GetUserThunk = (
  id: number
) => ThunkAction<void, State, number, Actions>;

export type GetUsersThunk = () => ThunkAction<void, State, void, Actions>;
