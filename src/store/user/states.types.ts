/* eslint-disable @typescript-eslint/no-explicit-any */
import { registerI, loginI, newAddressI, userDetailI } from 'src/types';
import { User } from './types';

export interface UserState {
  signUp: (userData: registerI) => Promise<{
    message: string;
    status: string;
  }>;
}

export interface LoginState {
  Login: (userData: loginI) => Promise<{
    data: User;
    message: string;
    status: string;
  }>;
}

export interface UserIdState {
  User: () => Promise<{
    data: userDetailI;
  }>;
}

export interface addAddress {
  NewAddress: (address: newAddressI) => Promise<{
    status: string;
    data: newAddressI;
  }>;
}
