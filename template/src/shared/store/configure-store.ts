import { configureStore, combineReducers, Middleware } from '@reduxjs/toolkit';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory, History } from 'history';
import notificationReducer from './notification-store';
import themeReducer from './theme-store';
import userReducer from './user-store';
import jwtDecode from 'jwt-decode';
import { AuthenticatedUser } from '../models';

const tokenAutoRemoval: Middleware = (store) => (next) => (action) => {
  const token = localStorage.getItem('token');
  if (token) {
    const decoded = jwtDecode(token) as AuthenticatedUser;
    if (decoded && decoded.exp < Date.now() / 1000) {
      localStorage.removeItem('token');
    }
  }
  return next(action);
};

export const history = createBrowserHistory();

const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    notifications: notificationReducer,
    theme: themeReducer,
    user: userReducer,
  });

export let store: ReturnType<typeof configureAppStore>;

export const configureAppStore = () => {
  const _store = configureStore({
    reducer: createRootReducer(history),
    middleware: (getDefaultMiddleware) => {
      return [...getDefaultMiddleware({ serializableCheck: false }), routerMiddleware(history), tokenAutoRemoval];
    },
  });
  store = _store;
  return _store;
};
