import { type AlertColor } from '@mui/material';

export interface Snackbar {
  open: boolean;
  type: AlertColor;
  message: string;
}
