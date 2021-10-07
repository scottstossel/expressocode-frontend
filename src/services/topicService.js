import axios from 'axios';
import apiHelper from '../helpers/apiHelper';
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
  const response = await apiHelper.post(`/topic/topic`, topic);
  return response;
}

export const updateTopicToApi = async (topic) => {
  const response = await apiHelper.put(`/topic/topic/${topic._id}`, topic);
  return response;
}

export const deleteTopicFromApi = async (id) => {
  const response = await apiHelper.delete(`/topic/topic/${id}`);
  return response;
}