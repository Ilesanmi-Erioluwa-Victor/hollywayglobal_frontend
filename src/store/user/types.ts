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

export interface userUserStore {
  user: User | null;
  register: (data: any) => Promise<{
    message: string;
    status: string;
  }>;

  login: (data: { email: string; password: string }) => Promise<{
    message: string;
    status: string;
    id: string;
    token: string;
  }>;

  fetchedUser: (
    userId: string,
    token: string
  ) => Promise<{
    message: string;
    status: string;
    data: User | null;
  }>;

  isLoading: boolean;
}
