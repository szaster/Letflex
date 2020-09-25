import { SET_COMMENTS } from "./types";
import axios from "axios";

export function setComments(comments) {
  return { type: SET_COMMENTS, payload: comments };
}

async function loadCommentsAndSetIfSuccess(dispatch, movieId) {
  try {
    const comments = await axios.get(`/api/comment?movieId=${movieId}`);
    dispatch(setComments({ data: comments.data, movieId }));
  } catch (e) {
    console.log(e);
  }
}
export const loadComments = (movieId) => (dispatch) =>
  loadCommentsAndSetIfSuccess(dispatch, movieId);

async function postCommentAndReload(dispatch, commentData) {
  try {
    await axios.post(`/api/comment`, commentData);
    dispatch(loadComments(commentData.movieId));
  } catch (e) {
    console.log(e);
  }
}
export const postComment = (commentData) => (dispatch) =>
  postCommentAndReload(dispatch, commentData);
