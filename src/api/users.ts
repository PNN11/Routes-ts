import axios from "axios";
import { User } from "./users.types";

export const getUsers = async () => {
  const { data } = await axios.get<User[]>(
    "https://jsonplaceholder.typicode.com/users"
  );

  return data;
};

export const getUser = async (id: number) => {
  const { data } = await axios.get<User>(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );

  return data;
};
