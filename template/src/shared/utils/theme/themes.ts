import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
      dark: '#004ba0',
      light: '#4791db',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      contrastText: '#ffcc00',
    },
    background: {
      default: '#fffefc',
      paper: '#121212',
    },
    divider: '#00000026',
    text: {
      primary: '#121212',
      secondary: '#880000',
      disabled: '#000000',
    },
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
});

export const darkTheme = createTheme({
  ...lightTheme,
  palette: {
    ...lightTheme.palette,
    mode: 'dark',
    primary: {
      main: '#5c6bc0',
      dark: '#26418f',
      light: '#8e99f3',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      contrastText: '#ffcc00',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
    divider: '#ffffff26',
    text: {
      primary: '#ffffff',
      secondary: '#880000',
      disabled: '#000000',
    },
  },
});
