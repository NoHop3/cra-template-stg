import { AuthenticatedUser, TNotification } from '../../shared';

export interface HeaderProps {
  notifications: TNotification[];

  user?: AuthenticatedUser;
  window?: () => Window;
  children?: React.ReactElement;

  onMarkANotificationAsRead: (id: string) => void;
  onRemoveANotification: (id: string) => void;

  onLogout?: () => void;
}
