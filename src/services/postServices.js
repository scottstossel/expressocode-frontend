import axios from 'axios';
import fetch from 'isomorphic-fetch';
import apiHelper from '../helpers/apiHelper';

const apiUrl = process.env.REACT_APP_API_URL;

export const getPostsFromApi = async () => {
  const response = await axios.get(`${apiUrl}/post`);
  return response;
}

export const getSinglePostFromApi = async (id) => {
  const response = await axios.get(`${apiUrl}/post/post/${id}`);
  return response;
}

export const createPost = async (obj) => {
  const response = await apiHelper.post(`/post/post`, obj);
  return response;
}

export const imageUploadToApi = async (id, img) => {
  const formData = new FormData();
  formData.append('image', img);
  const response = await axios.post(`${apiUrl}/post/post/imageUpload/${id}`, formData);
  return response;
}

export const updatePostToApi = async (post) => {
  const { token } = JSON.parse(localStorage.getItem('jwtexpressocode'));
  const response = await axios.put(`${apiUrl}/post/post/${post._id}`, post, {
    headers: {
      'Authorization': token
    }
  });
  return response;
}

export const deletePostFromApi = async (id) => {
  const { token } = JSON.parse(localStorage.getItem('jwtexpressocode'));
  const response = await axios.delete(`${apiUrl}/post/post/${id}`, {
    headers: {
      'Authorization': token
    }
  });
  return response;
}