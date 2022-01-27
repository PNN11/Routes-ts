import { Post } from "api/posts.types";

export interface PostProps extends Post {
  onClick: (id: number) => void;
}
