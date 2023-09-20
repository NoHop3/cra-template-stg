import React from 'react';
import { createTheme } from '@mui/material/styles';
import { useAppSelector } from '../typescript/redux-types';

export const useCustomTheme = () => {
  const customTheme = useAppSelector((state) => state.theme);

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: customTheme.mode,
          primary: customTheme.primary,
          secondary: {
            light: '#0066ff',
            main: '#0044ff',
            contrastText: '#ffcc00',
          },
          background: {
            default: customTheme.background,
            paper: '#ffffff',
          },
          text: customTheme.text,
          divider: customTheme.divider ?? '#00000026',
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
      }),
    [customTheme],
  );

  return theme;
};
