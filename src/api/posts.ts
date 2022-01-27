import axios from "axios";
import { Post, PostComment } from "./posts.types";

export const getPosts = async () => {
  const { data } = await axios.get<Post[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return data;
};

export const getPost = async (id: number) => {
  const { data } = await axios.get<Post>(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  return data;
};

export const getComments = async (id: number) => {
  const { data } = await axios.get<PostComment[]>(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  );

  return data;
};
