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

async function postCommentAndSetIfSuccess(dispatch, commentData) {
  try {
    const comments = await axios.post(`/api/comment`, commentData);
    //dispatch(setComments({ data: commentData, movieId }));
    console.log("comments data", commentData);
  } catch (e) {
    console.log(e);
  }
}
export const postComment = (commentData) => (dispatch) =>
  postCommentAndSetIfSuccess(dispatch, commentData);
