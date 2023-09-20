import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { Theme } from '../models/theme';

export interface ThemeStore {
  mode: 'light' | 'dark';
  primary: Theme['primary'];
  text: Theme['text'];
  background: string;
  divider: string;
}

const initialState: ThemeStore = {
  mode: 'light',
  primary: {
    main: '#880000',
    dark: '#121212',
    light: '#fffefc',
    contrastText: '#ffcc00',
  },
  text: {
    primary: '#121212',
    secondary: '#880000',
    disabled: '#000000',
  },
  background: '#fffefc',
  divider: '#00000026',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<ThemeStore>) {
      state = action.payload;
    },
    setThemeMode(state, action: PayloadAction<'light' | 'dark'>) {
      state.mode = action.payload;
    },
    setPrimaryTheme(state, action: PayloadAction<Theme['primary']>) {
      state.primary = action.payload;
    },
    setPrimaryThemeMain(state, action: PayloadAction<string>) {
      state.primary.main = action.payload;
    },
    setPrimaryThemeDark(state, action: PayloadAction<string>) {
      state.primary.dark = action.payload;
    },
    setPrimaryThemeLight(state, action: PayloadAction<string>) {
      state.primary.light = action.payload;
    },
    setPrimaryThemeContrastText(state, action: PayloadAction<string>) {
      state.primary.contrastText = action.payload;
    },
    setTextTheme(state, action: PayloadAction<Theme['text']>) {
      state.text = action.payload;
    },
    setTextThemePrimary(state, action: PayloadAction<string>) {
      state.text.primary = action.payload;
    },
    setTextThemeSecondary(state, action: PayloadAction<string>) {
      state.text.secondary = action.payload;
    },
    setTextThemeDisabled(state, action: PayloadAction<string>) {
      state.text.disabled = action.payload;
    },
    setBackgroundColor(state, action: PayloadAction<string>) {
      state.background = action.payload;
    },
    setThemeDivider(state, action: PayloadAction<string>) {
      state.divider = action.payload;
    },
  },
});

export default themeSlice.reducer;
export const {
  setTheme,
  setThemeMode,
  setPrimaryThemeMain,
  setPrimaryThemeDark,
  setPrimaryThemeLight,
  setBackgroundColor,
  setThemeDivider,
  setTextThemePrimary,
  setTextThemeSecondary,
  setTextThemeDisabled,
  setPrimaryTheme,
  setTextTheme,
  setPrimaryThemeContrastText,
} = themeSlice.actions;
