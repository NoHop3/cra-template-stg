import { type Action } from '@reduxjs/toolkit';
import { useDispatch, type TypedUseSelectorHook, useSelector } from 'react-redux';
import { type ThunkAction } from 'redux-thunk';
import { type ApplicationState } from '../../store/app-state';
import { type AppDispatch } from '../../store/app-thunk';

export declare type Thunk<TStore> = ThunkAction<void, TStore, null, Action<string>>;
export declare type AsyncThunk<TStore, TReturnType = void> = ThunkAction<
  Promise<TReturnType>,
  TStore,
  null,
  Action<string>
>;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<ApplicationState> = useSelector;
