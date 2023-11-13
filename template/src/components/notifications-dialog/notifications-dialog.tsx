import { useTheme } from '@mui/material/styles';
import { INotificationsDialogProps } from './notifications-dialog.props';
import { Dialog, DialogProps } from '../../shared';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import { CssBaseline, Avatar, Box, Tooltip, Typography } from '@mui/material';
import {
  NotificationsList,
  NotificationItem,
  TrashcanIcon,
  StyledNotificationTitleWrapper,
  StyledNotificationDate,
  StyledNotificationLeftSide,
  StyledNotificationDescription,
  StyledNotificationRightSide,
  StyledNotificationPriority,
  StyledNotificationTitle,
} from './notifications-dialog.styles';
import { Priority, TNotification } from '../../shared/models/notification';

export const NotificationDialog = (props: INotificationsDialogProps) => {
  const theme = useTheme();
  const { open, onClose, notifications, onMarkAsRead, onDelete } = props;

  const dialogProps: DialogProps = {
    open,
    onClose,
    title: 'Notifications',
    children: (
      <Box
        sx={{
          marginTop: theme.spacing(1),
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <CssBaseline />
        <Avatar sx={{ m: 1, bgcolor: theme.palette.text.primary }}>
          <CircleNotificationsIcon />
        </Avatar>
        <NotificationsList>
          {notifications && notifications.length > 0 ? (
            [...notifications]
              .sort((a, b) => {
                if (a.date > b.date) {
                  return -1; // 'a' comes first (more recent)
                }
                if (a.date < b.date) {
                  return 1; // 'b' comes first (more recent)
                }
                if (a.priority === Priority.HIGH && b.priority !== Priority.HIGH) {
                  return -1; // 'a' comes first (HIGH priority)
                }
                if (a.priority !== Priority.HIGH && b.priority === Priority.HIGH) {
                  return 1; // 'b' comes first (HIGH priority)
                }
                return 0; // no change in order
              })
              .map((notification: TNotification) => (
                <NotificationItem
                  key={notification.id}
                  {...(notification.read ? { read: true } : null)} // Conditionally add the read prop
                  onMouseEnter={() => {
                    if (!notification.read) {
                      onMarkAsRead(notification.id);
                    }
                  }}>
                  <StyledNotificationLeftSide>
                    <StyledNotificationTitleWrapper>
                      <StyledNotificationTitle variant="h6">{notification.title}</StyledNotificationTitle>
                    </StyledNotificationTitleWrapper>
                    <Tooltip title={notification.description} arrow placement="left">
                      <StyledNotificationDescription>{notification.description}</StyledNotificationDescription>
                    </Tooltip>
                  </StyledNotificationLeftSide>
                  <StyledNotificationRightSide>
                    <StyledNotificationDate className="notification-date">
                      {notification.date.toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                        hour: 'numeric',
                        minute: 'numeric',
                      })}
                    </StyledNotificationDate>
                    <StyledNotificationPriority
                      {...(notification.priority === Priority.HIGH ? { priority: 'high' } : null)}>
                      {notification.priority === Priority.HIGH ? 'High' : 'Low'}
                    </StyledNotificationPriority>
                    <TrashcanIcon
                      onClick={() => {
                        onDelete(notification.id);
                      }}>
                      &#128465;
                    </TrashcanIcon>
                  </StyledNotificationRightSide>
                </NotificationItem>
              ))
          ) : (
            <Typography variant="body1">No notifications</Typography>
          )}
        </NotificationsList>
      </Box>
    ),
    options: ['Close'],
    onOptionClick: onClose,
    width: '500px',
  };
  return (
    <div>
      <Dialog {...dialogProps} />
    </div>
  );
};
