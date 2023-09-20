import styled from 'styled-components';
import { Button } from '@mui/material';

export const StyledButton = styled(Button)`
  background-color: ${({ theme }) => theme.palette.primary.main};
  border: none;
  color: ${({ theme }) => theme.palette.primary.contrastText}};
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;
  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.main};
    scale: 1.1;  
    transition: 0.3s ease-in-out;
  }
`;
