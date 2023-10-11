import { type SnackbarProps, type AlertProps } from '@mui/material';

export interface SnackbarPayload {
  message: string;
  type?: AlertProps['severity'];
  autoHideDuration?: SnackbarProps['autoHideDuration'];
  anchorOrigin?: SnackbarProps['anchorOrigin'];
}

export interface ISnackbar extends SnackbarPayload {
  open: boolean;

  onClose: () => void;
}
