import { SET_FAVORITES } from "../_actions/types";

// data is going to contain comments
const initialState = { isFavorite: false, favNum: 0 };

export function favoritesReducer(state = initialState, action) {
  switch (action.type) {
    case SET_FAVORITES:
      const { isFavorite, favNum } = action.payload;
      return { ...state, isFavorite, favNum };
    default:
      return state;
  }
}
