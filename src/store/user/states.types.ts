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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Login: (userData: loginI) => Promise<any>;
  user: User | null;
}
