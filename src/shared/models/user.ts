export interface RegisteredUser {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  birthYear?: number;
}

export interface User extends RegisteredUser {
  id: number;
  apiKey: string;
}
