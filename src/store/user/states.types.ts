import { registerI } from 'src/types';

export interface UserState {
  response: null;
  isLoading: boolean;
  clearError: () => void;
  customError: Error | null;
  signUp: (userData: registerI) => Promise<void>;
}
