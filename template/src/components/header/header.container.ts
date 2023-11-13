import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import {
  type ApplicationState,
  type AppDispatch,
  reset,
  markANotificationAsRead,
  removeANotification,
  addANotification,
  Priority,
} from '../../shared';
import { Header } from './header';

const mapStateToProps = (state: ApplicationState) => ({
  notifications: state.notifications.notifications,
  user: state.user.user,
});

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    onLogout: () => {
      dispatch(reset());
      dispatch(
        addANotification({
          id: uuidv4(),
          title: 'Logout',
          description: 'You have been logged out.',
          priority: Priority.LOW,
          read: false,
          date: new Date(),
        }),
      );
    },
    onMarkANotificationAsRead: (id: string) => {
      dispatch(markANotificationAsRead(id));
    },
    onRemoveANotification: (id: string) => {
      dispatch(removeANotification(id));
    },
  };
};

export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);
