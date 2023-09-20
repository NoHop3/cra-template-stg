import { connect } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';

import { type ApplicationState } from '../../shared/store/app-state';
import { type AppDispatch } from '../../shared/store/app-thunk';
import { _Home } from './home';

const mapStateToProps = (state: ApplicationState) => ({
  title: 'Home',
});

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return bindActionCreators({}, dispatch);
};

export const Home = connect(mapStateToProps, mapDispatchToProps)(_Home);
