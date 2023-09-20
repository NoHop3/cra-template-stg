import { Alert, Snackbar } from '@mui/material';

import { type ISnackbar } from './snackbar.props';

export function _Snackbar(props: ISnackbar) {
  return (
    <Snackbar
      anchorOrigin={props.anchorOrigin}
      open={props.open}
      onClose={props.onClose}
      autoHideDuration={props.autoHideDuration}>
      <Alert onClose={props.onClose} severity={props.type} sx={{ width: '100%' }}>
        {props.message}
      </Alert>
    </Snackbar>
  );
}

_Snackbar.defaultProps = {
  autoHideDuration: 2000,

  anchorOrigin: {
    vertical: 'bottom',

    horizontal: 'right',
  },
};

export default _Snackbar;
