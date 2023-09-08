import { registerI, loginI } from 'src/types';
import { User } from './types';

export type Info = {
  message: string;
  isLoading: boolean;
  status: string;
};
export interface UserState {
  signUp: (userData: registerI) => Promise<void>;
}

export interface LoginState {
  isAuthenticated: boolean;
  Login: (userData: loginI) => Promise<void>;
  user: User | null;
}
