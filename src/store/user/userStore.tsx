/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-useless-catch */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { create } from 'zustand';

import authService from 'src/services/user/authService';

import { UserState, LoginState, UserIdState, addAddress } from './states.types';

import { registerI, loginI } from 'src/types';

import { getUserDataFromLocalStorage } from 'src/utils';

export const registerUserStore = create<UserState>(() => ({
  signUp: async (userData: registerI) => {
    try {
      const response = await authService.register(userData);
      const { message, status } = await response;
      return {
        message,
        status,
      };
    } catch (error: any) {
      throw error;
    }
  },
}));

export const loginUserStore = create<LoginState>(() => ({
  Login: async (userData: loginI) => {
    try {
      const response = await authService.login(userData);
      const { message, status, data } = await response;
      return {
        message,
        data,
        status,
      };
    } catch (error: any) {
      throw error;
    }
  },
}));

export const UserIdStore = create<UserIdState>(() => ({
  User: async () => {
    const { token, id } = getUserDataFromLocalStorage();
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

export const UserNewAddressStore = create<addAddress>(() => ({
  NewAddress: async () => {
    const { token, id } = getUserDataFromLocalStorage();
    try {
      const response = await authService.userId(id, token);
      const { status, data } = await response;
      return {
        data,
        status,
      };
    } catch (error: any) {
      throw error;
    }
  },
}));
