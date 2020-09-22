import { SET_USER } from "./types";
import axios from "axios";

export function setUser(user) {
  return { type: SET_USER, payload: user };
}

async function fetchUserAndSetIfSuccess(dispatch) {
  try {
    const user = await axios.get("/api/user");
    dispatch(setUser(user.data));
  } catch (e) {
    console.log(e);
  }
}

// set user thunk
export const fetchUser = () => fetchUserAndSetIfSuccess;
