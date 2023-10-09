export type Nav = {
  name: string;
  title: string;
  id: string;
  link: string;
};


export interface User {
  data: {
    firstName: string;
    lastName: string;
    password: string;
    email: string;
    mobile: string;
    id: string;
    deleteRequestDate: any;
    active: boolean;
    isAccountVerified: boolean;
    isBlocked: boolean;
    loggedInAfterRequest: boolean;
    profilePhoto: string;
    role?: string;
  };
  message: string;
  status: string;
}

export interface InitialState {
  isLoading: boolean;
  user: User | null;
  error: any;
  data: Data | null;
  password?: string | null;
  image?: string | null;
  updated_profile?: any;
}

export interface Data {
  id: any;
  token: any;
}
