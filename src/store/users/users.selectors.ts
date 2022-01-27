import { State as UsersState } from "./users.types";
import { RootState } from "../types";

export const getSliceUsers = (state: RootState): UsersState => state.users;
