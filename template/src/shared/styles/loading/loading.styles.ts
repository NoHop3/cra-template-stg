import { CircularProgress } from '@mui/material';
import styled from 'styled-components';

interface LoadingProps {
  height?: string;
  width?: string;
  gridArea?: string;
}

export const StyledLoadingGridItem = styled.div<LoadingProps>`
  grid-area: ${(p) => p.gridArea};
  height: ${(p) => p.height};
  width: ${(p) => p.width};
  background: #eee;
  background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
  border-radius: 5px;
  background-size: 200% 100%;
  animation: 1.5s shine linear infinite;
  @keyframes shine {
    to {
      background-position: 200% center;
    }
  }
`;

export const StyledCircularProgress = styled(CircularProgress)`
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -48px 0 0 -48px;
  color: ${({ theme }) => theme.palette.primary.dark};
`;
