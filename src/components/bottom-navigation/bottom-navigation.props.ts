import { TNotification } from '../../shared';

export interface IBottomNavigationProps {
  notifications: TNotification[];
  onDeleteNotification: (id: string) => void;
  onMarkNotificationAsRead: (id: string) => void;
}
