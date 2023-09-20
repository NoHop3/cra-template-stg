import { connect } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';

import { type ApplicationState } from '../../../shared/store/app-state';
import { type AppDispatch } from '../../../shared/store/app-thunk';
import { _SignUp } from './sign-up.container';
import { userService } from '../../../services';

const mapStateToProps = (state: ApplicationState) => ({
  isLoggedIn: state.user.isLoggedIn,
});

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return bindActionCreators(
    {
      signUp: userService.signUp,
    },
    dispatch,
  );
};

export const SignUp = connect(mapStateToProps, mapDispatchToProps)(_SignUp);
