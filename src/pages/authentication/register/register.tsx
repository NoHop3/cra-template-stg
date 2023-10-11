import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {
  Typography,
  Container,
  CssBaseline,
  Avatar,
  Grid,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Link,
  Box,
} from '@mui/material';

import { RegisterProps } from '../authentication.props';
import { isEmailValid } from './register.utils';
import { Copyright } from '../authentication.utils';
import { Backdrop } from '../../../shared';

export const Register = (props: RegisterProps) => {
  const navigate = useNavigate();
  const theme = useTheme();

  const [formState, setFormState] = React.useState({
    email: '',
    username: '',
    firstName: '',
    lastName: '',
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
      isEmailValid(formState.email) === '' &&
      formState.email !== '' &&
      formState.username !== '' &&
      formState.username.length >= 3 &&
      formState.username.length <= 21 &&
      formState.firstName !== '' &&
      formState.firstName.length >= 3 &&
      formState.firstName.length <= 21 &&
      formState.lastName !== '' &&
      formState.lastName.length >= 3 &&
      formState.lastName.length <= 21 &&
      formState.password !== '' &&
      formState.password.length >= 5 &&
      formState.password.length <= 21
    );
  };

  const redirectIfLoggedIn = React.useCallback(() => {
    if (!props.isLoading && props.user) {
      navigate('/');
    }
  }, [props.isLoading, navigate]);

  React.useEffect(() => {
    redirectIfLoggedIn();
  }, [redirectIfLoggedIn]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateForm()) {
      props.register(formState);
    }
  };

  return (
    <>
      {props.isLoading && <Backdrop />}
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
            {'Register'}
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={handleChange}
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  error={
                    formState.firstName !== ''
                      ? formState.firstName.length < 3 || formState.firstName.length > 20
                      : false
                  }
                  helperText={
                    formState.firstName !== ''
                      ? formState.firstName.length < 3 || formState.firstName.length > 20
                        ? 'Must be between 3 and 20 characters'
                        : ''
                      : ''
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={handleChange}
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  error={
                    formState.lastName !== '' ? formState.lastName.length < 3 || formState.lastName.length > 20 : false
                  }
                  helperText={
                    formState.lastName !== ''
                      ? formState.lastName.length < 3 || formState.lastName.length > 20
                        ? 'Must be between 3 and 20 characters'
                        : ''
                      : ''
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={handleChange}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  error={formState.email !== '' && isEmailValid(formState.email) !== ''}
                  helperText={isEmailValid(formState.email)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={handleChange}
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  error={
                    formState.username !== '' ? formState.username.length < 3 || formState.username.length > 20 : false
                  }
                  helperText={
                    formState.username !== ''
                      ? formState.username.length < 3 || formState.username.length > 20
                        ? 'Must be between 3 and 20 characters'
                        : ''
                      : ''
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={handleChange}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  error={
                    formState.password !== ''
                      ? !(formState.password.length > 5 && formState.password.length < 21)
                      : false
                  }
                  helperText={
                    formState.password !== ''
                      ? formState.password.length < 6 || formState.password.length > 20
                        ? 'Must be between 6 and 20 characters'
                        : ''
                      : ''
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              {'Register'}
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <Link
                  sx={{ cursor: 'pointer' }}
                  variant="body2"
                  onClick={() => {
                    navigate('/login');
                  }}>
                  {'Already have an account?'}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </>
  );
};
