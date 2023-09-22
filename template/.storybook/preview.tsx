import React, { useMemo } from 'react';
import { ThemeProvider as ScThemeProvider } from 'styled-components';
import { ThemeProvider, StyledEngineProvider } from '@mui/material';
import { lightTheme, darkTheme } from '../src/shared/utils/theme/themes';

export const globalTypes = {
  theme: {
    name: 'Theme',
    title: 'Theme',
    description: 'Theme for your components',
    defaultValue: 'light',
    toolbar: {
      icon: 'paintbrush',
      dynamicTitle: true,
      items: [
        { value: 'light', left: '☀️', title: 'Light mode' },
        { value: 'dark', left: '🌙', title: 'Dark mode' },
      ],
    },
  },
};
const THEMES = {
  light: lightTheme,
  dark: darkTheme,
};

export const withProviders = (Story, context) => {
  // The theme global we just declared
  const { theme: themeKey } = context.globals;

  // only recompute the theme if the themeKey changes
  const theme = useMemo(() => THEMES[themeKey] || THEMES['light'], [themeKey]);
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <ScThemeProvider theme={theme}>
          <Story />
        </ScThemeProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export const decorators = [withProviders];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    expanded: true, // Adds the description and default columns
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
