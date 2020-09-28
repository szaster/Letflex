import { combineReducers } from "redux";

import { authReducer } from "./auth";
import { commentsReducer } from "./comments";
import { favoritesReducer } from "./favorite";

const rootReducer = combineReducers({
  auth: authReducer,
  comments: commentsReducer,
  favorites: favoritesReducer,
});

export default rootReducer;
