import { Box, Typography } from '@mui/material';
import styled from 'styled-components';

export const StyledHomeWrapper = styled(Box)`
  width: calc(100vw - 25%);
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-color: ${({ theme }) => theme.palette.background.default};
`;

export const StyledHomeTitle = styled(Typography)`
  margin: 1rem;
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  color: ${({ theme }) => theme.palette.text.primary};
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);

  background: linear-gradient(
    to right,
    ${({ theme }) => theme.palette.text.primary},
    ${({ theme }) => theme.palette.text.contrastText}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  transition: all 0.3s;
  cursor: default;

  &:hover {
    transform: scale(1.05);
    text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.3);
  }
`;

export const StyledHomeDescription = styled(Typography)`
  margin: 1rem;
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  color: ${({ theme }) => theme.palette.text.primary};
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

export const StyledCheckpointInfoWrapper = styled(Box)`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin: 2rem auto;
  padding: 1rem;
`;

export const StyledCheckpointInfo = styled(Box)`
  display: flex;
  padding: 1rem;
  flex-direction: column;
  min-height: 6rem;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.background.default};
  border-radius: 0.5rem;

  transition: all 0.3s;
  cursor: default;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
`;

export const StyledLink = styled.span`
  margin: 0.2rem;
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.palette.text.primary};
    font-weight: bold;
    transition: color 0.3s;
  }

  a:hover {
    color: ${({ theme }) => theme.palette.text.secondary};
    text-decoration: underline;
  }
`;
