import { connect } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';

import { type ApplicationState, type AppDispatch } from '../../shared';
import { Home } from './home';

const mapStateToProps = (state: ApplicationState) => ({
  title: 'Welcome to this awesome template! 🚀',
});

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return bindActionCreators({}, dispatch);
};

export const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);
