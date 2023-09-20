import { connect } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';

import { type ApplicationState } from '../../shared/store/app-state';
import { type AppDispatch } from '../../shared/store/app-thunk';
import { _ThemeDialog } from './theme-dialog.container';
import { setPrimaryThemeMain, setBackgroundColor, setTextThemePrimary } from '../../shared/store/theme-store';

const mapStateToProps = (state: ApplicationState) => ({
  theme: state.theme,
});

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return bindActionCreators(
    {
      setPrimaryThemeMain,
      setBackgroundColor,
      setTextThemePrimary,
    },
    dispatch,
  );
};

export const ThemeDialog = connect(mapStateToProps, mapDispatchToProps)(_ThemeDialog);
