import { connect } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';

import { type ApplicationState } from '../../../shared/store/app-state';
import { type AppDispatch } from '../../../shared/store/app-thunk';
import { _SignIn } from './sign-in.container';
import { userService } from '../../../services';

const mapStateToProps = (state: ApplicationState) => ({
  isLoggedIn: state.user.isLoggedIn,
});

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return bindActionCreators(
    {
      signIn: userService.signIn,
    },
    dispatch,
  );
};

export const SignIn = connect(mapStateToProps, mapDispatchToProps)(_SignIn);
