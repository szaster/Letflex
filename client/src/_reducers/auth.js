import { SET_USER } from "../_actions/types";

const initialState = { isAuthorized: false, user: {} };

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return state;
    default:
      return state;
  }
}
