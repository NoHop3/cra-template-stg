import { Pagination } from '@mui/material';
import styled from 'styled-components';

export const StyledPagination = styled(Pagination)`
  color: ${({ theme }) => theme.palette.primary.contrastText};
`;
