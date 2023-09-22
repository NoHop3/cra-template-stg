import * as React from 'react';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useTheme } from '@mui/material/styles';
import {
  Typography,
  CssBaseline,
  Avatar,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Grid,
  Container,
  Box,
  Link,
} from '@mui/material';
import { SignInProps } from '../authentication.props';
import { useNavigate } from 'react-router-dom';
import { Copyright } from '../authentication.utils';

export const _SignIn = (props: SignInProps) => {
  const navigate = useNavigate();

  const [formState, setFormState] = React.useState({
    username: '',
    password: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState((formState) => ({
      ...formState,
      [name]: value,
    }));
  };

  const validateForm = () => {
    return (
      formState.username !== '' &&
      formState.username.length >= 3 &&
      formState.username.length <= 21 &&
      formState.password !== '' &&
      formState.password.length >= 5 &&
      formState.password.length <= 21
    );
  };

  const redirectIfLoggedIn = React.useCallback(() => {
    if (props.isLoggedIn) {
      navigate('/');
    }
  }, [props.isLoggedIn, navigate]);

  React.useEffect(() => {
    redirectIfLoggedIn();
  }, [redirectIfLoggedIn]);

  const theme = useTheme();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateForm()) {
      props.signIn(formState.username, formState.password);
    }
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        bgcolor: theme.palette.background.default,
        color: theme.palette.text.primary,
      }}>
      <CssBaseline />
      <Box
        sx={{
          marginTop: theme.spacing(1),
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <Avatar sx={{ m: 1, bgcolor: theme.palette.text.primary }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            onChange={handleChange}
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            error={formState.username !== '' ? formState.username.length < 3 || formState.username.length > 20 : false}
            helperText={
              formState.username !== ''
                ? formState.username.length < 3 || formState.username.length > 20
                  ? 'Must be between 3 and 20 characters'
                  : ''
                : ''
            }
          />
          <TextField
            onChange={handleChange}
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            error={
              formState.password !== '' ? !(formState.password.length > 5 && formState.password.length < 21) : false
            }
            helperText={
              formState.password !== ''
                ? formState.password.length < 6 || formState.password.length > 20
                  ? 'Must be between 6 and 20 characters'
                  : ''
                : ''
            }
          />
          <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link
                sx={{ cursor: 'pointer' }}
                variant="body2"
                onClick={() => {
                  alert('Link clicked');
                }}>
                {'Forgot password?'}
              </Link>
            </Grid>
            <Grid item>
              <Link
                sx={{ cursor: 'pointer' }}
                variant="body2"
                onClick={() => {
                  navigate('/sign-up');
                }}>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
};
