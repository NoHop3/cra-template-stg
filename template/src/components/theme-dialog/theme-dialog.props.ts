import { Theme } from '../../shared/models/theme';
import { DialogProps } from '../shared/dialog/dialog.props';

export interface ThemeDialogProps extends DialogProps {
  theme: Theme;
  setPrimaryThemeMain: (color: string) => void;
  setTextThemePrimary: (color: string) => void;
  setBackgroundColor: (color: string) => void;
}
