import { SET_USER } from "../_actions/types";

const initialState = { isAuthenticated: false, user: {} };

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return { ...state, isAuthenticated: true, user: action.payload };
    default:
      return state;
  }
}
