import { registerI } from 'src/types';

export interface UserState {
  message: string;
  isLoading: boolean;
  status: string;
  signUp: (userData: registerI) => Promise<void>;
}
