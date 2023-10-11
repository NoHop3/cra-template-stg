/* eslint-disable @typescript-eslint/no-unsafe-argument */
import styled from 'styled-components';

import { hexWithAlpha, mediaUpTo } from '../../../shared/utils/helpers';

export const ItemImageWrapper = styled.div`
  position: relative;
  margin-right: 20px;

  ${mediaUpTo('tablet')} {
    margin-right: 16px;
  }
`;

export const ImageContainer = styled.div`
  width: 250px;
  height: 150px;
  background-color: ${({ theme }) => theme.palette.background.paper};
  border-radius: 5px;

  ${mediaUpTo('tablet')} {
    width: 140px;
    height: 100px;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: cover;
    border-radius: 5px;
  }

  [data-no-image] {
    border-radius: 5px;
  }
`;

export const ContentHolder = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const ItemTitleHolder = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const ItemTitle = styled.div`
  font-family: 'Roboto', sans-serif;
  color: ${({ theme }) => theme.palette.text.primary};
  display: -webkit-box;
  width: calc(100% - 48px);
  padding-top: ${({ theme }) => theme.spacing(1)};
  font-size: 20px;
  font-weight: 500;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;

  ${mediaUpTo('tablet')} {
    width: 100%;
    font-size: 14px;
    font-weight: 500;
    -webkit-line-clamp: 3;
  }
`;

export const ItemDate = styled.span`
  padding: 8px 24px 8px 16px;
  font-size: 12px;
  color: ${({ theme }) => theme.palette.text.primary};
  white-space: nowrap;

  ${mediaUpTo('tablet')} {
    display: none;
  }
`;

export const ItemDescription = styled.div`
  font-family: 'Roboto', sans-serif;
  color: ${({ theme }) => theme.palette.text.secondary};
  display: -webkit-box;
  width: calc(100% - 40px);
  margin: 0 0 8px;
  text-overflow: ellipsis;
  white-space: pre-line;
  height: -webkit-fill-available;
  overflow: hidden;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  font-size: 12px;

  ${mediaUpTo('tablet')} {
    display: none;
  }
`;

export const AddToFavoritesButton = styled.button<{ disabled?: boolean }>`
  position: absolute;
  top: 6px;
  right: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  font-size: 14px;
  border: none;
  color: ${({ theme }) => theme.palette.primary.contrastText};
  background: ${({ theme }) => hexWithAlpha(theme.palette.primary.main, 70)};
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  cursor: pointer;
  transition: all 0.1s ease;

  &:hover,
  &:active {
    background: ${({ theme }) => theme.palette.primary.main};
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    width: 42px;
    height: 42px;
  }

  ${mediaUpTo('tablet')} {
    position: absolute;
    top: 5px;
    left: 5px;
    width: 28px;
    height: 28px;
    font-size: 14px;
    background: ${({ theme }) => theme.palette.background.default};

    &:hover,
    &:active {
      background: ${({ theme }) => theme.palette.background.default};
    }

    &:active {
      transform: scale(1.1);
    }

    &::after {
      content: '';
      position: absolute;
      top: -5px;
      left: -5px;
      width: 56px;
      height: 56px;
    }
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  padding: 24px 0;
  border-top: 1px solid ${({ theme }) => theme.palette.divider};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => hexWithAlpha(theme.palette.background.default, 10)};
    border-color: transparent;

    & + * {
      border-color: transparent;
    }

    [data-search-result-faux-button] {
      opacity: 1;
    }

    [data-search-result-image] {
      img {
        opacity: 0.5;
      }
    }
  }

  ${mediaUpTo('tablet')} {
    position: relative;
    margin-bottom: 10px;
    padding-bottom: 10px;
  }

  &:first-child {
    border-top: none;
  }
`;
