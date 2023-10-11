import { Snackbar } from '@mui/material';
import styled from 'styled-components';

export const StyledSnackBar = styled(Snackbar)`
  .MuiSnackbarContent-root {
    background-color: ${({ theme }) => theme.palette.primary.inverted};
  }
`;
