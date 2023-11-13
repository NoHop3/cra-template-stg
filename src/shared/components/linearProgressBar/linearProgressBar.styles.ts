// linearProgressBar.styles.ts
import styled from 'styled-components';

export const LinearProgressBarWrapper = styled.div`
  width: 100%;
  margin: 20px auto;

  .MuiLinearProgress-bar {
    background-color: ${({ theme }) => theme.palette.primary.main};
  }
`;
