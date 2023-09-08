/* eslint-disable no-useless-catch */

import { registerI, loginI } from 'src/types';
import { apiClient } from './apiService';

const register = async (userData: registerI) => {
  try {
    const response = await apiClient.post('user/signup', userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const login = async (userData: loginI) => {
  try {
    const response = await apiClient.post('user/login', userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default {
  register,
  login,
};
