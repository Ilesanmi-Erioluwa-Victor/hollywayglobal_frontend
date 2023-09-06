/* eslint-disable no-useless-catch */
import axios from 'axios';
import { Util } from 'src/utils';

const apiClient = axios.create({
  baseURL: Util.baseUrlDev,
  headers: {
    'Content-Type': 'application/json',
  },
});

const get = async (url: string, params = {}) => {
  try {
    const response = await apiClient.get(url, { params });
    return response.data;
  } catch (error) {
    throw error;
  }
};

const post = async (url: string, data = {}) => {
  try {
    const response = await apiClient.post(url, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const put = async (url: string, data = {}) => {
  try {
    const response = await apiClient.put(url, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default {
  get,
  post,
  put,
};
