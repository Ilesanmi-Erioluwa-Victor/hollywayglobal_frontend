import { create } from 'zustand';
import axios from 'axios';
import { UserData } from './types';

interface UserState {

}

const useUserStore = create<UserState>((set) => ({
 
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
