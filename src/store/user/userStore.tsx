/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-useless-catch */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { create } from 'zustand';

import authService from 'src/services/authService';

import { UserState, Info, LoginState, UserIdState } from './states.types';

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
  isAuthenticated: false,
  user: null,

  Login: async (userData: loginI) => {
    set({ isLoading: true, isAuthenticated: false });

    try {
      const response = await authService.login(userData);
      const { message, status, data } = await response;
      set({
        isLoading: false,
        isAuthenticated: true,
      });
      return {
        message,
        data,
        status,
      };
    } catch (error: any) {
      set({
        isLoading: false,
        message: '',
        user: null,
        status: 'failed',
        isAuthenticated: false,
      });
      throw error;
    }
  },
}));

export const UserIdStore = create<UserIdState>(() => ({
  User: async () => {
    const userData = JSON.parse(
      localStorage.getItem('Hollywayglobal_user') as string
    );

    const token = await userData.token;
    const id = await userData.id;
    if (!token || !id) {
      throw new Error('No user found');
    }

    try {
      const response = await authService.userId(id, token);
      return {
        data: response,
      };
    } catch (error: any) {
      throw error;
    }
  },
}));
