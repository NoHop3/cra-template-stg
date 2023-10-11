/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import styled from 'styled-components';
import { CirclePicker } from 'react-color';

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.palette.divider};
  margin: ${({ theme }) => theme.spacing(2, 0)};
`;

export const StyledColorPickerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing(3)};
`;

export const StyledCirclePicker = styled(CirclePicker)<{ isInverted?: boolean }>`
  > span > div > span > div {
    box-shadow: ${({ theme, isInverted }) => isInverted && `0 0 0 1px ${theme.palette.secondary.contrastText!} inset`};
  }
`;
