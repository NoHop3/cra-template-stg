import styled from 'styled-components';
import { Box, Paper, Typography } from '@mui/material';

export const NotificationsList = styled(Box)`
  width: 100%;
  overflow-y: auto;
  padding: 8px;
  border-radius: 8px;
`;

export const NotificationItem = styled(Paper)<{ read?: boolean }>`
  margin-bottom: ${({ theme }) => theme.spacing(1)};
  padding: 12px;
  border: 2px solid transparent;
  border-radius: 8px;
  cursor: pointer;
  transition: border-color 0.3s;
  border-color: ${({ read }) => (read ? 'transparent' : '#ef5350')};

  display: flex;
  justify-content: space-between;
`;

export const StyledNotificationTitleWrapper = styled(Box)`
  display: flex;
  align-items: space-between;
  justify-content: space-between;
`;

export const StyledNotificationLeftSide = styled(Box)`
  max-width: 16rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const StyledNotificationRightSide = styled(Box)`
  display: flex;
  flex-direction: column;
`;

export const StyledNotificationTitle = styled(Typography)`
  font-size: 1rem;
  text-align: left;
  display: -webkit-box;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

export const StyledNotificationDescription = styled(Typography)`
  font-size: 0.75rem;
  text-align: left;
  display: -webkit-box;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

export const StyledNotificationDate = styled(Typography)`
  font-size: 12px;
  color: grey;
`;

export const StyledNotificationPriority = styled(Typography)<{ prioritized?: boolean }>`
  margin-top: ${({ theme }) => theme.spacing(1)};
  font-size: 12px;
  color: ${({ prioritized }) => (prioritized ? '#ef5350' : '#000')};
`;

export const TrashcanIcon = styled.span`
  margin-top: ${({ theme }) => theme.spacing(1)};
  opacity: 0;
  cursor: pointer;
  color: #ef5350;
  transition opacity 0.3s;

  ${NotificationItem}:hover & {
    opacity: 1;
  }
`;
