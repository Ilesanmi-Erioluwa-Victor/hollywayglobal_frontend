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
