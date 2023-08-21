interface LoginUser {
  id: string;
  token: string;
}

// interface SignUp
export interface UserStore {
  user: any;
  signUp: () => Promise<string>;
  login: (email: string, password: string) => Promise<LoginUser>;
  fetchUser: (id: string) => Promise<string>;
}
