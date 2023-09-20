/* eslint-disable @typescript-eslint/no-unsafe-argument */
import styled, { keyframes } from 'styled-components';

import { hexWithAlpha } from '../index';

export const Container = styled.div<{ iconSize?: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to top,
    ${({ theme }) => hexWithAlpha(theme.palette.primary.main, 70)},
    ${({ theme }) => hexWithAlpha(theme.palette.primary.main, 50)}
  );

  svg {
    height: ${({ iconSize }) => iconSize ?? '80'}px;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const SpinningIcon = styled.div<{ iconSize: number }>`
  width: ${({ iconSize }) => iconSize}px;
  height: ${({ iconSize }) => iconSize}px;
  animation: ${rotate} 0.6s ease-out infinite;
`;
