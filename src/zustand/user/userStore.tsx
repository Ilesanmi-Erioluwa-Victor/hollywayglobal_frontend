import { create } from 'zustand';
import axios from 'axios';
import { UserData } from './types';
import { Helper } from 'src/helper';
interface UserState {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  user: null | any;
  signUpError: null | string;
  signUpLoading: boolean;
  message: string;
  signUp: (userData: UserData) => Promise<void>;
  clearSignUpError: () => void;
}

const useUserStore = create<UserState>((set) => ({
  user: null,
  signUpError: null,
  signUpLoading: false,
  message: '',
  signUp: async (userData: UserData) => {
    try {
      const response = await axios.post(
        `https://hollywayglobadb.onrender.com/api/v1/user/signup`,
        userData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      return response.data;
    } catch (error) {
      //   set({
      //     signUpError: error.message || 'Signup failed',
      //     signUpLoading: false,
      //   });
    }
  },
  clearSignUpError: () => set({ signUpError: null }),
}));

export default useUserStore;
