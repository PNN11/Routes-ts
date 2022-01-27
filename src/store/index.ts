import {
  createStore,
  combineReducers,
  applyMiddleware,
  Middleware,
} from "redux";
import thunk from "redux-thunk";

import { postsReducer } from "./posts";
import { usersReducer } from "./users";
import { todosReducer } from "./todos";

const logger: Middleware = (store) => (next) => (action) => {
  console.log(action);
  return next(action);
};

const reducers = combineReducers({
  posts: postsReducer,
  users: usersReducer,
  todos: todosReducer,
});
const store = createStore(reducers, applyMiddleware(logger, thunk));

export default store;
