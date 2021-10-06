import axios from 'axios';
const apiUrl = process.env.REACT_APP_API_URL;

export const getTopicsFromApi = async () => {
  const response = await axios.get(`${apiUrl}/topic`);
  return response;
}

export const getSingleTopicFromApi = async (id) => {
  const response = await axios.get(`${apiUrl}/topic/topic/${id}`);
  return response;
}

export const postTopicToApi = async (topic) => {
  const response = await axios.post(`${apiUrl}/topic/topic`, topic);
  return response;
}

export const updateTopicToApi = async (topic) => {
  const response = await axios.put(`${apiUrl}/topic/topic/${topic._id}`, topic);
  return response;
}

export const deleteTopicFromApi = async (id) => {
  const response = await axios.delete(`${apiUrl}/topic/topic/${id}`);
  return response;
}