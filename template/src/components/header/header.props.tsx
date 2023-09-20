export interface HeaderProps {
  isLoggedIn?: boolean;

  window?: () => Window;
  children?: React.ReactElement;

  onLogout?: () => void;
}
