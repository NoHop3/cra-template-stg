import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { ThemeProvider as ScThemeProvider } from 'styled-components';
import {
  useCustomTheme,
  useGetDeviceType,
  DeviceTypes,
  useAppDispatch,
  useAppSelector,
  setNotificationVisibility,
  Snackbar,
  AuthenticatedUser,
  setUser,
} from './shared';
import { Home, Error, Login, Register } from './pages';
import { Header, BottomNavigation } from './components';
import jwtDecode from 'jwt-decode';
import { useEffect } from 'react';

function App() {
  const notification = useAppSelector((state) => state.notifications.notification);
  const theme = useCustomTheme();
  const dispatch = useAppDispatch();

  // Set background color for the root element
  const root = document.getElementById('root') as HTMLElement;
  root.style.backgroundColor = theme.palette.background.default;

  // Check if the user is authenticated and set the user in the store or remove token if expired
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = jwtDecode(token) as AuthenticatedUser;
      if (decoded && decoded.exp >= Date.now() / 1000) {
        // Dispatch setUser if a valid token exists
        dispatch(setUser(decoded));
      }
    }
  }, []);

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
              open={notification.open}
              message={notification.message}
              type={notification.type}
              onClose={() => dispatch(setNotificationVisibility(false))}
              autoHideDuration={4000}
            />
            {useGetDeviceType() !== DeviceTypes.DESKTOP && <BottomNavigation />}
          </div>
        </BrowserRouter>
      </ScThemeProvider>
    </ThemeProvider>
  );
}

export default App;
