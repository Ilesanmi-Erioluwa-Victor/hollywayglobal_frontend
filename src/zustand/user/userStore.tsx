import { create } from 'zustand';
import axios from 'axios';
import { UserData } from './types';
interface UserState {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  user: null | any;
  signUpError: null | string;
  signUpLoading: boolean;
  signUp: (userData: UserData) => Promise<void>;
  clearSignUpError: () => void;
}

const useUserStore = create<UserState>((set) => ({
  user: null,
  signUpError: null,
  signUpLoading: false,
  signUp: async (userData: UserData) => {
    try {
      //   set({ signUpLoading: true, signUpError: null });
      const response = await axios.post(
        'https://hollywayglobadb.onrender.com/api/v1/user/signup',
        userData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      // Assuming your server returns user data upon successful signup
      const user = response.data;
      set({ user, signUpLoading: false });
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
