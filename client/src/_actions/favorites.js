import { SET_FAVORITES } from "./types";
import axios from "axios";

export function setFavorites(favorites) {
  return { type: SET_FAVORITES, payload: favorites };
}

async function loadFavoritesAndSetIfSuccess(dispatch, movieId) {
  try {
    const favorite = await axios.get(`/api/favorite?movieId=${movieId}`);
    dispatch(setFavorites(favorite.data));
  } catch (e) {
    console.log(e);
  }
}
export const loadFavorites = (movieId) => (dispatch) =>
  loadFavoritesAndSetIfSuccess(dispatch, movieId);

async function toggleFavoriteAndReload(dispatch, favoriteData) {
  try {
    await axios.post(`/api/favorite`, favoriteData);
    dispatch(loadFavorites(favoriteData.movieId));
  } catch (e) {
    console.log(e);
  }
}
export const toggleFavorite = (favoriteData) => (dispatch) =>
  toggleFavoriteAndReload(dispatch, favoriteData);
