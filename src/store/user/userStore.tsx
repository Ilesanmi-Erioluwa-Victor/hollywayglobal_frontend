import { create } from 'zustand';

import { userUserStore } from './types';

import { apiClient } from 'src/services/apiService';

export const useUserStore = create<userUserStore>((set) => ({
  user: null,
  isLoading: false,
  register: async (data) => {
    try {
      set({ isLoading: true });
      const response = await apiClient.post('auth/register', data);
      const returnedData = await response.data;
      console.log(response, returnedData);
      return returnedData;
    } catch (error: any) {
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },

  login: async (data) => {
    set({ isLoading: true });
    try {
      const response = await apiClient.post('auth/login', data);
      const returnedData = await response.data;
      return returnedData;
    } catch (error: any) {
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },

  fetchedUser: async (userId, token) => {
    set({ isLoading: true });
    try {
      const response = await apiClient.get(`user/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.data;
      set({ user: data?.data });
      return { data, message: data?.message, status: data?.status };
    } catch (error: any) {
      return {
        data: null,
        message: 'error fetching user',
        status: 'failed',
      };
    } finally {
      set({ isLoading: false });
    }
  },
}));
