import { type AlertColor } from '@mui/material';

export interface TSnackbar {
  open: boolean;
  type: AlertColor;
  message: string;
}
