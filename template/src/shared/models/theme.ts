export interface Theme {
  mode: 'light' | 'dark';
  primary: PrimaryTheme;
  text: TextTheme;
  background: string;
  divider?: string;
}

export interface PrimaryTheme {
  main: string;
  dark: string;
  light: string;
}

export interface TextTheme {
  primary: string;
  secondary: string;
  disabled: string;
  contrastText: string;
}
