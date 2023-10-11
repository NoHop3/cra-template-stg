import { connect } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';

import { type ApplicationState, type AppDispatch, reset } from '../../shared';
import { Header } from './header';

const mapStateToProps = (state: ApplicationState) => ({
  user: state.user.user,
});

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return bindActionCreators(
    {
      onLogout: reset,
    },
    dispatch,
  );
};

export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);
