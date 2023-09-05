import { create } from 'zustand';
import axios from 'axios';

interface UserState {
  user: null | User; // You can define a User type for your user data
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
      set({ signUpLoading: true, signUpError: null });
      // Make the POST request to your signup endpoint using Axios
      const response = await axios.post('/api/signup', userData);

      // Assuming your server returns user data upon successful signup
      const user = response.data;
      set({ user, signUpLoading: false });
    } catch (error) {
      set({
        signUpError: error.message || 'Signup failed',
        signUpLoading: false,
      });
    }
  },
  clearSignUpError: () => set({ signUpError: null }),
}));

export default useUserStore;
