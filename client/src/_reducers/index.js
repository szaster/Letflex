import { combineReducers } from "redux";
import user from "./user_reducer";
import { authReducer } from "./auth";

const rootReducer = combineReducers({
  user,
  auth: authReducer,
});

export default rootReducer;
