import axios from 'axios';
import jwtDecode from 'jwt-decode';
import {
  AuthenticatedUser,
  User,
  setIsLoading,
  setSnackbar,
  setUser,
  userEndpoints,
  addANotification,
} from '../shared';
import { Priority } from '../shared/models/notification';
import { v4 as uuidv4 } from 'uuid';

// #region login
export const login = (username: string, password: string) => (dispatch: any) => {
  dispatch(setIsLoading(true));
  axios
    .post(
      userEndpoints.login(),
      JSON.stringify({
        username,
        password,
      }),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    .then((res: any) => {
      localStorage.setItem('token', res.data.token as string);
      const user = jwtDecode(res.data.token as string) as AuthenticatedUser;
      dispatch(setUser(user));
      dispatch(
        addANotification({
          id: uuidv4(),
          title: 'Login successful',
          description: `You have successfully logged in as ${user.username}!`,
          read: false,
          priority: Priority.LOW,
          date: new Date(),
        }),
      );
      dispatch(
        setSnackbar({
          open: true,
          type: 'success',
          message: `User was signed in successfully!`,
        }),
      );
    })
    .catch((err: any) => {
      dispatch(
        setSnackbar({
          open: true,
          type: 'error',
          message: `User was not signed in!`,
        }),
      );
      dispatch(
        addANotification({
          id: uuidv4(),
          title: 'Login failed',
          description: `You have failed to login as ${username}!`,
          read: false,
          priority: Priority.HIGH,
          date: new Date(),
        }),
      );
      console.error(err);
    })
    .finally(() => {
      dispatch(setIsLoading(false));
    });
};

// #endregion

// #region register
export const register = (user: User) => (dispatch: any) => {
  dispatch(setIsLoading(true));
  axios
    .post(userEndpoints.register(), JSON.stringify(user), {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((res: any) => {
      localStorage.setItem('token', res.data.token as string);
      const user = jwtDecode(res.data.token as string) as AuthenticatedUser;
      dispatch(setUser(user));
      dispatch(
        addANotification({
          id: uuidv4(),
          title: 'Registration successful',
          description: `You have successfully registered as ${user.username}!`,
          read: false,
          priority: Priority.LOW,
          date: new Date(),
        }),
      );
      dispatch(
        setSnackbar({
          open: true,
          type: 'success',
          message: `User was signed up successfully!`,
        }),
      );
    })
    .catch((err: any) => {
      dispatch(
        addANotification({
          id: uuidv4(),
          title: 'Registration failed',
          description: `You have failed to register as ${user.username}!`,
          read: false,
          priority: Priority.HIGH,
          date: new Date(),
        }),
      );
      dispatch(
        setSnackbar({
          open: true,
          type: 'error',
          message: `User was not signed up!`,
        }),
      );
      console.error(err);
    })
    .finally(() => {
      dispatch(setIsLoading(false));
    });
};
// #endregion
