import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import { useTheme } from '@mui/material/styles';
import { ThemeDialogContainer } from '../theme-dialog/theme-dialog.container';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { NotificationDialog } from '../notifications-dialog';
import { IBottomNavigationProps } from './bottom-navigation.props';
import { StyledNumberOfNotifications } from './bottom-navigation.styles';

export const BottomNav = (props: IBottomNavigationProps) => {
  const location = useLocation();
  const [openThemeDialog, setOpenThemeDialog] = React.useState(false);
  const [openNotificationDialog, setOpenNotificationDialog] = React.useState(false);
  const [value, setValue] = React.useState(location.pathname.split('/')[1]);
  const theme = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    setValue(location.pathname.split('/')[1] || 'home');
  }, [location.pathname]);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    switch (newValue) {
      case 'notifications':
        setOpenNotificationDialog(true);
        break;
      case 'home':
        setValue(newValue);
        navigate('/');
        break;
      case 'theme':
        setOpenThemeDialog(true);
        break;
      default:
        break;
    }
  };

  return (
    <BottomNavigation
      style={{ backgroundColor: theme.palette.primary.main }}
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
      value={value}
      onChange={handleChange}>
      <BottomNavigationAction
        key={'notifications'}
        style={{ color: theme.palette.text.primary }}
        label="Notifications"
        showLabel
        value="notifications"
        icon={
          <div>
            <CircleNotificationsIcon style={{ color: theme.palette.text.primary }} />
            <StyledNumberOfNotifications>
              {props.notifications.filter((n) => !n.read).length}
            </StyledNumberOfNotifications>
          </div>
        }
      />
      <BottomNavigationAction
        key={'home'}
        style={{ color: theme.palette.text.primary }}
        label="Home"
        value="home"
        icon={<HomeIcon style={{ color: theme.palette.text.primary }} />}
      />
      <BottomNavigationAction
        showLabel
        key={'theme'}
        style={{ color: theme.palette.text.primary }}
        label="Theme"
        value="theme"
        icon={<BedtimeIcon style={{ color: theme.palette.text.primary }} />}
      />
      <ThemeDialogContainer
        open={openThemeDialog}
        onClose={() => {
          setOpenThemeDialog(false);
        }}
      />
      <NotificationDialog
        open={openNotificationDialog}
        onClose={() => {
          setOpenNotificationDialog(false);
        }}
        notifications={props.notifications}
        onDelete={props.onDeleteNotification}
        onMarkAsRead={props.onMarkNotificationAsRead}
      />
    </BottomNavigation>
  );
};
