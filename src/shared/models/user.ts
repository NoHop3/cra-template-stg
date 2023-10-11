export interface User {
  username: string;
  password?: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface AuthenticatedUser extends User {
  id: string;
  iat: number;
  exp: number;
}
