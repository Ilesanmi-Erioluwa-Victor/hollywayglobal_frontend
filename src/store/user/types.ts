export interface User {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  mobile: string;
}

export interface UserStore {
  user: User | null;
  setUser: (user: User | null) => void;
}
