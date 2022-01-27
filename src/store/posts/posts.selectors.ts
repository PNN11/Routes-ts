import { State as PostsState } from "./posts.types";
import { RootState } from "../types";

export const getSlice = (state: RootState): PostsState => state.posts;
