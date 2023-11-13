import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { Theme } from '../models/theme';

export interface ThemeStore {
  theme: Theme;
  savedTheme: Theme;
}

const initialState: ThemeStore = {
  theme: {
    primary: {
      main: '#880000',
      dark: '#121212',
      light: '#fffefc',
    },
    text: {
      primary: '#121212',
      secondary: '#880000',
      disabled: '#000000',
      contrastText: '#ffcc00',
    },
    background: '#fffefc',
    divider: '#00000026',
    mode: 'light',
  },
  savedTheme: {
    primary: {
      main: '#880000',
      dark: '#121212',
      light: '#fffefc',
    },
    text: {
      primary: '#121212',
      secondary: '#880000',
      disabled: '#000000',
      contrastText: '#ffcc00',
    },
    background: '#fffefc',
    divider: '#00000026',
    mode: 'light',
  },
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme(state) {
      state.savedTheme = state.theme;
    },
    setThemeMain(state, action: PayloadAction<string>) {
      state.theme.primary.main = action.payload;
    },
    setThemeText(state, action: PayloadAction<string>) {
      state.theme.text.primary = action.payload;
    },
    setThemeBackground(state, action: PayloadAction<string>) {
      state.theme.background = action.payload;
    },
    resetTheme(state) {
      state.theme = state.savedTheme;
    },
  },
});

export default themeSlice.reducer;
export const { setTheme, setThemeBackground, setThemeMain, setThemeText, resetTheme } = themeSlice.actions;
