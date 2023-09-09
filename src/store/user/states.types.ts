/* eslint-disable @typescript-eslint/no-explicit-any */
import { registerI, loginI, userDetail } from 'src/types';
import { User } from './types';

export interface UserState {
  signUp: (userData: registerI) => Promise<void>;
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
    data: userDetail;
  }>;
}

export interface UserState {
  User: () => Promise<{
    data: any;
  }>;
}
