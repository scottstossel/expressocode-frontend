import axios from "axios";
import apiHelper from "../helpers/apiHelper";

const apiUrl = process.env.REACT_APP_API_URL;

export const getCommentsFromApi = async () => {
  const response = await axios.get(`${apiUrl}/comment`);
  return response;
}

export const postCommentToApi = async (comment) => {
  // const {token} = JSON.parse(localStorage.getItem);
  // console.log("TOKEN", token)
  const response = await apiHelper.post(`/comment/comment`, comment);
  return response;
}

export const updateCommentToApi = async (comment) => {
  const response = await apiHelper.put(`/comment/comment/${comment._id}`, comment);
  return response;
}

export const deleteCommentFromApi = async (id) => {
  const response = await apiHelper.delete(`/comment/comment/${id}`);
  return response;
}