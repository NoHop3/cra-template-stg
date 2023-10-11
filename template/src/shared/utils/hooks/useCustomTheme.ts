import React from 'react';
import { createTheme } from '@mui/material/styles';
import { useAppSelector } from '../typescript/redux-types';

export const useCustomTheme = () => {
  const { theme } = useAppSelector((state) => state.theme);

  const createdTheme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: theme.mode,
          primary: theme.primary,
          secondary: {
            light: '#0066ff',
            main: '#0044ff',
            contrastText: '#ffcc00',
          },
          background: {
            default: theme.background,
            paper: '#ffffff',
          },
          text: theme.text,
          divider: theme.divider ?? '#00000026',
        },
        components: {},
        breakpoints: {
          values: {
            xs: 0,
            sm: 480,
            md: 768,
            lg: 1024,
            xl: 1280,
          },
        },
        spacing: 8,
        typography: {
          fontFamily: 'Roboto',
          fontSize: 16,
          fontWeightLight: 300,
          fontWeightRegular: 400,
          fontWeightMedium: 500,
          fontWeightBold: 700,
        },
        zIndex: {
          appBar: 1200,
          drawer: 1100,
        },
      }),
    [theme],
  );

  return createdTheme;
};
