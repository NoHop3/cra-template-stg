import { Box, Typography } from '@mui/material';
import styled from 'styled-components';

export const StyledHomeWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-color: ${({ theme }) => theme.palette.background.default};
`;

export const StyledHomeTitle = styled(Typography)`
  margin: 1rem;
  font-size: 2rem;
  font-weight: 400;
  text-align: center;
`;
