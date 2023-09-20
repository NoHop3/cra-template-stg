import { Box, Dialog } from '@mui/material';
import styled from 'styled-components';

export const StyledThemeDialog = styled(Dialog)`
width: 100%;
  .MuiDialog-paper {
    width: 100%;
    max-width: ${({ theme }) => theme.breakpoints.values.lg}px;
    background-color: ${({ theme }) => theme.palette.background.default};
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.values.lg}px) {
    .MuiDialog-paper {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }
`;

export const StyledThemeDialogHeader = styled(Box)`
  width: calc(100% - ${({ theme }) => theme.spacing(4)});
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(2)};
  font-size: ${({ theme }) => theme.typography.fontSize}px;
  font-weight: ${({ theme }) => theme.typography.fontWeightBold};
  border-bottom: 1px solid ${({ theme }) => theme.palette.divider};
`;

export const StyledThemeDialogBody = styled(Box)`
  height: calc(100% - 160px);
  width: calc(100% - ${({ theme }) => theme.spacing(6)});
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: ${({ theme }) => theme.spacing(3)};
  font-size: ${({ theme }) => theme.typography.fontSize}px;
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
`;

export const StyledThemeDialogBodyRow = styled(Box)`
  width: calc(100% - ${({ theme }) => theme.spacing(6)});
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing(2)};

  @media (max-width: ${({ theme }) => theme.breakpoints.values.lg}px) {
    flex-direction: column;
  }
`;

export const StyledThemeDialogFooter = styled(Box)`
  width: calc(100% - ${({ theme }) => theme.spacing(4)});
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: ${({ theme }) => theme.spacing(2)};
  border-top: 1px solid ${({ theme }) => theme.palette.divider};
`;
