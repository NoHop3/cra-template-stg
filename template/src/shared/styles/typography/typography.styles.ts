import { Typography } from '@mui/material';
import styled from 'styled-components';

export const StyledTypography = styled(Typography)`
  font-family: ${({ theme }) => theme.typography.fontFamily ?? 'Roboto, sans-serif'};
  font-size: ${({ theme }) => theme.typography.fontSize ?? '16px'};

  @media (max-width: ${({ theme }) => theme.breakpoints.values.lg}px) {
    font-size: 0.9rem;
`;
