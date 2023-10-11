import { connect } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';

import {
  type ApplicationState,
  type AppDispatch,
  setTheme,
  setThemeMain,
  setThemeText,
  setThemeBackground,
  resetTheme,
} from '../../shared';
import { ThemeDialog } from './theme-dialog';

const mapStateToProps = (state: ApplicationState) => ({
  theme: state.theme.theme,
});

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return bindActionCreators(
    {
      setTheme,
      setThemeMain,
      setThemeText,
      setThemeBackground,
      resetTheme,
    },
    dispatch,
  );
};

export const ThemeDialogContainer = connect(mapStateToProps, mapDispatchToProps)(ThemeDialog);
