import { connect } from 'react-redux';

import { type ApplicationState, type AppDispatch, markANotificationAsRead, removeANotification } from '../../shared';
import { BottomNav } from './bottom-navigation';

const mapStateToProps = (state: ApplicationState) => ({
  notifications: state.notifications.notifications,
});

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    onMarkNotificationAsRead: (id: string) => {
      dispatch(markANotificationAsRead(id));
    },
    onDeleteNotification: (id: string) => {
      dispatch(removeANotification(id));
    },
  };
};

export const BottomNavigationContainer = connect(mapStateToProps, mapDispatchToProps)(BottomNav);
