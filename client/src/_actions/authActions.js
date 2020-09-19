import { SET_USER } from "./types";
import axios from "axios";

export function setUser(user) {
  return { type: SET_USER, payload: user };
}

// set user thunk
export const fetchUser = () => async (dispatch) => {
  try {
    const user = await axios.get("/api/user");
    dispatch(setUser(user));
  } catch (e) {
    console.log(e);
  }
};
