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

export interface Product {
  data: {
    brand: string;
    colors: string;
    id: string;
    images: string[];
    price: number;
    reviews: string[];
    stock: number;
    title: string;
  };
  message: string;
  status: string;
}

export interface InitialStateUser {
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

export interface InitialStateAddress {
  isLoading: boolean;
  address: any;
  error: any;
}

export interface InitialStateProduct {
  isLoading: boolean;
  product: Product | null;
  error: any;
}
