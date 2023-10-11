import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { AuthenticatedUser, User, setIsLoading, setNotification, setUser, userEndpoints } from '../shared';

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
      console.log(res.data);
      localStorage.setItem('token', res.data.token as string);
      dispatch(setUser(jwtDecode(res.data.token as string) as AuthenticatedUser));
      dispatch(
        setNotification({
          open: true,
          type: 'success',
          message: `User was signed in successfully!`,
        }),
      );
    })
    .catch((err: any) => {
      dispatch(
        setNotification({
          open: true,
          type: 'error',
          message: `User was not signed in!`,
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
  console.log(user);
  axios
    .post(userEndpoints.register(), JSON.stringify(user), {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((res: any) => {
      localStorage.setItem('token', res.data.token as string);
      dispatch(setUser(jwtDecode(res.data.token as string) as AuthenticatedUser));
      dispatch(
        setNotification({
          open: true,
          type: 'success',
          message: `User was signed up successfully!`,
        }),
      );
    })
    .catch((err: any) => {
      dispatch(
        setNotification({
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
