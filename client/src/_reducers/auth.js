import { SET_USER } from "../_actions/types";

const initialState = { isAuthenticated: false, user: {} };

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      const { id } = action.payload;
      const isAuthenticated = id !== null && id !== undefined && id !== "";
      return { ...state, isAuthenticated, user: action.payload };
    default:
      return state;
  }
}
