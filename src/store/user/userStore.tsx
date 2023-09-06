/* eslint-disable @typescript-eslint/no-explicit-any */

import { create } from 'zustand';

import authService from 'src/services/authService';
import { UserState } from './states.types';
import { registerI } from 'src/types';

export const registerUserStore = create<UserState>((set) => ({
  customError: null,
  isLoading: false,
  response: null,

  signUp: async (userData: registerI) => {
    set({ isLoading: true, customError: null });

    try {
      const response = await authService.register(userData);
      set({ response, isLoading: false });
    } catch (error: any) {
      set({
        customError: error.message || 'Sign up failed',
        isLoading: false,
      });
    }
  },
  clearError: () => set({ customError: null }),
}));
