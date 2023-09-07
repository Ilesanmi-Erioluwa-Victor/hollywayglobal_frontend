/* eslint-disable no-useless-catch */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { create } from 'zustand';

import authService from 'src/services/authService';

import { UserState, Info, LoginState } from './states.types';

import { registerI, loginI } from 'src/types';

export const registerUserStore = create<UserState & Info>((set) => ({
  message: '',
  isLoading: false,
  status: '',

  signUp: async (userData: registerI) => {
    set({ isLoading: true, message: '', status: '' });

    try {
      const response = await authService.register(userData);
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

export const loginUserStore = create<LoginState & Info>((set) => ({
  message: '',
  isLoading: false,
  status: '',
  user: null,

  Login: async (userData: loginI) => {
    set({ isLoading: true, message: '', status: '' });

    try {
      const response = await authService.login(userData);
      console.log(response)
      set({
        message: response.message,
        isLoading: false,
        status: response.status,
        user: response.data,
      });
    } catch (error: any) {
      set({ isLoading: false });
      throw error;
    }
  },
}));
