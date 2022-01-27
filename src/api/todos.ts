import axios from "axios";
import { Todo } from "./todos.types";

export const getTodos = async () => {
  const { data } = await axios.get<Todo[]>(
    "https://jsonplaceholder.typicode.com/todos"
  );

  return data;
};

export const getTodo = async (id: number) => {
  const { data } = await axios.get<Todo>(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );

  return data;
};
