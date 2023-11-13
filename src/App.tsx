import { useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import { connect } from 'react-redux';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { ThemeProvider as ScThemeProvider } from 'styled-components';
import {
  useCustomTheme,
  useGetDeviceType,
  DeviceTypes,
  setSnackbarVisibility,
  Snackbar,
  AuthenticatedUser,
  setUser,
  AppDispatch,
  ApplicationState,
  TSnackbar,
  setSnackbar,
} from './shared';
import { Home, Error, Login, Register } from './pages';
import { Header, BottomNavigation } from './components';

interface IAppProps {
  snackbar: TSnackbar;

  onInit: () => void;
  setSnackbarVisibility: (visibility: boolean) => void;
}

const App = (props: IAppProps) => {
  const token = localStorage.getItem('token');

  // Set background color for the root element
  const root = document.getElementById('root') as HTMLElement;
  const theme = useCustomTheme();
  root.style.backgroundColor = theme.palette.background.default;

  const { snackbar, setSnackbarVisibility, onInit } = props;

  useEffect(() => {
    onInit();
  }, [token]);

  return (
    <ThemeProvider theme={theme}>
      <ScThemeProvider theme={theme}>
        <BrowserRouter>
          <div
            className="App"
            style={{
              backgroundColor: theme.palette.background.default,
            }}>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="*" element={<Error />} />
            </Routes>
            <Snackbar
              open={snackbar.open}
              message={snackbar.message}
              type={snackbar.type}
              onClose={() => {
                setSnackbarVisibility(false);
              }}
              autoHideDuration={4000}
            />
            {useGetDeviceType() !== DeviceTypes.DESKTOP && <BottomNavigation />}
          </div>
        </BrowserRouter>
      </ScThemeProvider>
    </ThemeProvider>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  snackbar: state.notifications.snackbar,
  user: state.user.user,
  token: state.user.token,
});

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    onInit: () => {
      const token = localStorage.getItem('token');
      if (token) {
        const decoded = jwtDecode(token) as AuthenticatedUser;
        if (decoded && decoded.exp >= Date.now() / 1000) {
          // Dispatch setUser if a valid token exists
          dispatch(setUser(decoded));
          dispatch(
            setSnackbar({
              open: true,
              message: `Welcome back! ${decoded.username} 👋`,
              type: 'success',
            }),
          );
        } else {
          // Remove invalid token
          localStorage.removeItem('token');
          dispatch(setUser(undefined));
          dispatch(
            setSnackbar({
              open: true,
              message: 'Your session has expired. Please login again. 😅',
              type: 'error',
            }),
          );
        }
      } else {
        dispatch(setUser(undefined));
        dispatch(
          setSnackbar({
            open: true,
            message: 'Hey 👋! Welcome to this create-react-app custom template! 😎',
            type: 'info',
          }),
        );
      }
    },
    setSnackbarVisibility: (visibility: boolean) => dispatch(setSnackbarVisibility(visibility)),
  };
};

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
