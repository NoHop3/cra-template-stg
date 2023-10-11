import { connect } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';

import { Login } from './login';
import { userService } from '../../../services';
import { type AppDispatch, type ApplicationState } from '../../../shared';

const mapStateToProps = (state: ApplicationState) => ({
  user: state.user.user,
  isLoading: state.user.isLoading,
});

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return bindActionCreators(
    {
      login: userService.login,
    },
    dispatch,
  );
};

export const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);
