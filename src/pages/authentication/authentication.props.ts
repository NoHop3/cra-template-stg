import { User, AuthenticatedUser } from '../../shared';

export interface AuthenticationProps {
  user?: AuthenticatedUser;
  isLoading: boolean;
}

export interface LoginProps extends AuthenticationProps {
  login: (username: string, password: string) => void;
}

export interface RegisterProps extends AuthenticationProps {
  register: (user: User) => void;
}
