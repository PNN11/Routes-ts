import { State as TodosState } from "./todos.types";
import { RootState } from "../types";

export const getSliceTodos = (state: RootState): TodosState => state.todos;
