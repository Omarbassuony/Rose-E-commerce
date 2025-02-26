declare type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  phone: string;
  photo: string;
  role: string;
  wishlist: string[];
  addresses: string[];
} & DatabaseFields;

declare type LoginResponse = {
  token: string;
  user: User;
};
