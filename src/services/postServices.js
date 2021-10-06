import axios from 'axios';
import fetch from 'isomorphic-fetch';

const apiUrl = process.env.REACT_APP_API_URL;

export const getPostsFromApi = async () => {
  const response = await axios.get(`${apiUrl}/post`);
  return response;
}

export const getSinglePostFromApi = async (id) => {
  const response = await axios.get(`${apiUrl}/post/post/${id}`);
  return response;
}

export const createPost = (post, token) => {
  return fetch(`${apiUrl}/post/post`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Authorization': token
    },
    body: blog
  })
  .then(response => {
    return response.json();
  })
  .catch(err => console.log(err));
}

export const imageUploadToApi = async (id, img) => {
  const formData = new FormData();
  formData.append('image', img);
  const response = await axios.post(`${apiUrl}/post/post/imageUpload/${id}`, formData);
  return response;
}

export const updatePostToApi = async (post) => {
  const response = await axios.put(`${apiUrl}/post/post/${post._id}`, post);
  return response;
}

export const deletePostFromApi = async (id) => {
  const response = await axios.delete(`${apiUrl}/post/post/${id}`);
  return response;
}