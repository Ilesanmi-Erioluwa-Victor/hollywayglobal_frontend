export interface User {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  mobile: string;
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
