/* eslint-disable no-useless-catch */

import { registerI } from 'src/types';
import { apiClient } from './apiService';

const register = async (userData: registerI) => {
  try {
    const response = await apiClient.post('/register', userData);
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

const del = async (url: string) => {
  try {
    const response = await apiClient.delete(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default {
  register,
  post,
  put,
  del,
};
