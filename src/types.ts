export interface registerI {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  mobile: string;
}

export interface loginI {
  password: string;
  email: string;
}

export interface userDetailI {
  active: boolean;
  email: string;
  firstName: string;
  id: string;
  isAccountVerified: boolean;
  lastName: string;
  mobile: string;
  profilePhoto: string;
}

export interface newAddressI {
  deliveryAddress: string;
  additionalInfo?: string;
  region: string;
  city: string;
  phone?: string;
  additionalPhone: string;
}
