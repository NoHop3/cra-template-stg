import { type Action, type ThunkDispatch } from '@reduxjs/toolkit';
import { type ApplicationState } from './app-state';

import { type Thunk, type AsyncThunk } from '../utils/typescript/redux-types';

export type AppThunk = Thunk<ApplicationState>;
export type AsyncAppThunk<T = void> = AsyncThunk<ApplicationState, T>;
export type AppDispatch = ThunkDispatch<ApplicationState, null, Action<string>>;
