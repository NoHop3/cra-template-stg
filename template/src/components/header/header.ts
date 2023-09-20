import { connect } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';

import { type ApplicationState } from '../../shared/store/app-state';
import { type AppDispatch } from '../../shared/store/app-thunk';
import { _Header } from './header.container';
import { reset } from '../../shared/store/user-store';

const mapStateToProps = (state: ApplicationState) => ({
  isLoggedIn: state.user.isLoggedIn,
});

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return bindActionCreators(
    {
      onLogout: reset,
    },
    dispatch,
  );
};

export const Header = connect(mapStateToProps, mapDispatchToProps)(_Header);
