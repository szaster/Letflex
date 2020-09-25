import { SET_COMMENTS } from "../_actions/types";

// data is going to contain comments
const initialState = { data: [], movieId: null };

export function commentsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_COMMENTS:
      const { data, movieId } = action.payload;
      return { ...state, movieId, data };
    default:
      return state;
  }
}
