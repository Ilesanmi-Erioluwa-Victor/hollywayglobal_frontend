/* eslint-disable no-useless-catch */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { create } from 'zustand';

import authService from 'src/services/authService';

import { UserState } from './states.types';

import { registerI } from 'src/types';

export const registerUserStore = create<UserState>((set) => ({
  message: '',
  isLoading: false,
  status: '',

  signUp: async (userData: registerI) => {
    set({ isLoading: true, message: '', status: '' });

    try {
      const response = await authService.register(userData);
      console.log(response)
      set({
        message: response.message,
        isLoading: false,
        status: response.status,
      });
    } catch (error: any) {
      set({ isLoading: false });
      throw error;
    }
  },
}));
