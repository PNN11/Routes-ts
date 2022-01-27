import { State as PostsState } from "./posts/posts.types";
import { State as TodosState } from "./todos/todos.types";
import { State as UsersState } from "./users/users.types";

export enum Statuses {
  PENDING,
  FAILURE,
  SUCCESS,
  UNCALLED,
}

export interface RootState {
  readonly posts: PostsState;
  readonly todos: TodosState;
  readonly users: UsersState;
}
