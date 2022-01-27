import { Todo } from "api/todos.types";

export interface TodoProps extends Todo {
  onClick: (id: number) => void;
}

export interface TodoWrapperStyled {
  completed: boolean;
}
