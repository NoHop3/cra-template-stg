import { connect } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';

import { Register } from './register';
import { userService } from '../../../services';
import { type AppDispatch, type ApplicationState } from '../../../shared';

const mapStateToProps = (state: ApplicationState) => ({
  user: state.user.user,
  isLoading: state.user.isLoading,
});

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return bindActionCreators(
    {
      register: userService.register,
    },
    dispatch,
  );
};

export const RegisterContainer = connect(mapStateToProps, mapDispatchToProps)(Register);
