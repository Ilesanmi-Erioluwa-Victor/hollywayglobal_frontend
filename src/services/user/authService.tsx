/* eslint-disable no-useless-catch */

import { registerI, loginI, newAddress } from 'src/types';
import { apiClient } from '../apiService';
import { createAuthHeaders } from 'src/utils';

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

const userId = async (id: string, token: string) => {
  try {
    const authHeader = createAuthHeaders(token);

    const response = await apiClient.get(`user/${id}`, authHeader);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const createAddress = async (
  address: newAddress,
  id: string,
  token: string
) => {
  try {
    const authHeader = createAuthHeaders(token);

    const response = await apiClient.post(
      `user/${id}/address/create`,
      address,
      authHeader
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default {
  register,
  login,
  userId,
  createAddress,
};
