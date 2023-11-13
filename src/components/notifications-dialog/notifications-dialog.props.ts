import { TNotification } from '../../shared';

export interface INotificationsDialogProps {
  notifications: TNotification[];
  open: boolean;

  onClose: () => void;
  onMarkAsRead: (id: string) => void;
  onDelete: (id: string) => void;
}
