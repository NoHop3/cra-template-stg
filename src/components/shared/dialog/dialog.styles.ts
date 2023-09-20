/* eslint-disable @typescript-eslint/no-unsafe-argument */
import styled from 'styled-components';
import { hexWithAlpha, mediaUpTo } from '../../../shared/utils/helpers';

export const StyledDialog = styled.div`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 900px;
  max-height: calc(100vh - 100px);
  background: ${({ theme }) => theme.palette.background.default};
  border-radius: 4px;
  box-shadow:
    0 2px 20px rgba(0, 0, 0, 0.15),
    0 30px 20px -20px rgba(0, 0, 0, 0.2);
  will-change: opacity, transform, transition;

  ${mediaUpTo('desktop')} {
    max-width: 100%;
    height: 100%;
    max-height: 100vh;
    border-radius: 0;
  }
`;

export const StyledDialogBackdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background: rgba(0, 0, 0, 0.5);
`;

export const StyledDialogWrapper = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1201;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
  opacity: ${({ open }) => (open ? '1' : '0')};
  transition: ${({ open }) => (open ? 'all 0.24s ease' : 'all 0.24s ease 0.12s')};
  will-change: opacity, transition;
  pointer-events: ${({ open }) => (open ? 'all' : 'none')};

  ${mediaUpTo('desktop')} {
    padding: 0;
  }

  ${StyledDialog} {
    opacity: ${({ open }) => (open ? '1' : '0')};
    transform: ${({ open }) => (open ? 'translate3d(0, 0, 0)' : 'translate3d(0, -30px, 0)')};
    transition: ${({ open }) => (open ? 'all 0.24s ease 0.12s' : 'all 0.24s ease')};
  }
`;

export const DialogTitle = styled.h3`
  font-size: 2rem;
  text-align: center;
  margin: 0;
  padding: 8px;
  border-bottom: 1px solid ${({ theme }) => theme.palette.divider};
`;

export const DialogBody = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing(2)};
  height: 100%;
  min-height: 200px;
  overflow-x: auto;
`;

export const DialogOptionItem = styled.div<{
  isSelected: boolean;
  isTopLevel?: boolean;
}>`
  display: flex;
  padding: 9px 16px;
  overflow: hidden;
  background-color: ${({ theme, isSelected }) => (isSelected ? hexWithAlpha(theme.palette.primary.main, 10) : 'none')};
  border-radius: 5px;
  text-overflow: ellipsis;
  font-size: 20px;
  font-weight: ${({ isSelected }) => (isSelected ? '500' : '400')};
  cursor: pointer;
  color: ${({ theme }) => theme.palette.text.primary};
  font-weight: ${({ isSelected, isTopLevel }) => (isSelected || isTopLevel ? 'bold' : 'normal')};
  transition: background-color 0.1s ease;
  &:hover {
    background-color: ${({ theme, isSelected }) =>
      isSelected ? hexWithAlpha(theme.palette.primary.secondary, 10) : hexWithAlpha(theme.palette.primary.main, 10)};
  }
`;

export const DialogFooter = styled.div`
  width: calc(100% - ${({ theme }) => theme.spacing(4)});
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: ${({ theme }) => theme.spacing(2)};
  border-top: 1px solid ${({ theme }) => theme.palette.divider};
`;
