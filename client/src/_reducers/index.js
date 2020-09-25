import { combineReducers } from "redux";

import { authReducer } from "./auth";
import { commentsReducer } from "./comments";

const rootReducer = combineReducers({
  auth: authReducer,
  comments: commentsReducer,
});

export default rootReducer;
