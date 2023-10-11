import { AuthenticatedUser } from '../../shared';

export interface HeaderProps {
  user?: AuthenticatedUser;

  window?: () => Window;
  children?: React.ReactElement;

  onLogout?: () => void;
}
