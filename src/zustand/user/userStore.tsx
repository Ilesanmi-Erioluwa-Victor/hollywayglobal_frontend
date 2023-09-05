import create from 'zustand';
import axios from 'axios';

interface UserState {
  user: null | User; // You can define a User type for your user data
  signUpError: null | string;
  signUpLoading: boolean;
  signUp: (userData: UserData) => Promise<void>;
  clearSignUpError: () => void;
}
