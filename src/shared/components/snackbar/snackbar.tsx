import { Alert } from '@mui/material';

import { type ISnackbar } from './snackbar.props';
import { StyledSnackBar } from './snackbar.styles';

export function Snackbar(props: ISnackbar) {
  return (
    <StyledSnackBar
      anchorOrigin={props.anchorOrigin}
      open={props.open}
      onClose={props.onClose}
      autoHideDuration={props.autoHideDuration}>
      <Alert onClose={props.onClose} severity={props.type} sx={{ width: '100%' }}>
        {props.message}
      </Alert>
    </StyledSnackBar>
  );
}

Snackbar.defaultProps = {
  autoHideDuration: 2000,

  anchorOrigin: {
    vertical: 'bottom',

    horizontal: 'right',
  },
};

export default Snackbar;
