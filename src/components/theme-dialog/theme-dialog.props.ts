import { Theme, DialogProps } from '../../shared';

export interface ThemeDialogProps extends DialogProps {
  theme: Theme;

  setTheme: () => void;
  setThemeMain: (color: string) => void;
  setThemeText: (color: string) => void;
  setThemeBackground: (color: string) => void;
  resetTheme: () => void;
}
