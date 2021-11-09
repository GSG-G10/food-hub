import { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import Link from '@mui/material/Link';
import { Divider } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useSnackbar } from 'notistack';
import { LoginWindow } from '../LoginWindow';
import { useAuthContext } from '../../firebase/firebaseHook';
import { AuthButtons } from '../LoginWindow/AuthButtons';

export const Register = () => {
  const [formValues, setFormValues] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    accountType: '',
  });
  const { enqueueSnackbar } = useSnackbar();
  const [passwordError, setPasswordError] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [authError, setAuthError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const { username, email, password, confirmPassword } = formValues;
  const [open, setOpen] = useState(false);
  const { signUpWithEmail, loginWithGoogle, loginWithFacebook, error } =
    useAuthContext();
  const history = useHistory();

  const handleChange = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password.length < 8) {
      setPasswordError(true);
    } else if (password !== confirmPassword) {
      setConfirmPasswordError(true);
    }
    try {
      await signUpWithEmail(email, password);
      enqueueSnackbar('Your account has been created successfully !', {
        variant: 'success',
      });
      history.push('/');
    } catch (err) {
      setAuthError(error);
    }
  };

  return (
    <>
      <Container maxWidth="lg">
        <Box
          boxShadow="rgb(99 99 99 / 20%) 0px 2px 8px 0px"
          py={8}
          mt={4}
          mb={8}
          display="flex"
          flexDirection="column"
          alignItems="center"
          textAlign="center"
        >
          <Box
            width={{ xl: '50%', lg: '60%', md: '70%', sm: '80%', xs: '90%' }}
          >
            <Typography
              variant="h1"
              fontWeight="500"
              marginBottom="1.5em"
              color="secondary"
            >
              Create an Account
            </Typography>
            <AuthButtons
              loginWithGoogle={loginWithGoogle}
              loginWithFacebook={loginWithFacebook}
            />
            <Divider width="100%" my={4} sx={{ my: 1.6 }} />
            <form onSubmit={handleSubmit}>
              <TextField
                id="username"
                name="username"
                label="Username"
                type="text"
                value={username}
                fullWidth
                size="small"
                margin="normal"
                required
                onChange={handleChange}
              />
              <TextField
                id="email"
                name="email"
                label="email"
                type="email"
                value={email}
                fullWidth
                size="small"
                margin="normal"
                required
                onChange={handleChange}
              />
              <TextField
                error={passwordError}
                id="password"
                name="password"
                label="password"
                type="password"
                value={password}
                fullWidth
                size="small"
                margin="normal"
                required
                helperText={
                  passwordError
                    ? 'Password must contain at least 8 characters'
                    : ''
                }
                onChange={handleChange}
              />
              <TextField
                error={confirmPasswordError}
                id="confirmPassword"
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                value={confirmPassword}
                fullWidth
                size="small"
                margin="normal"
                required
                helperText={
                  (confirmPasswordError
                    ? 'Password and confirm password does not match'
                    : '',
                  error
                    ? error.split('/')[1].split(')')[0].replace('-', ' ')
                    : '')
                }
                onChange={handleChange}
              />
              <Box
                display="flex"
                justifyContent="flex-start"
                textAlign="left"
                mt={2}
              >
                <FormControl component="fieldset">
                  <FormLabel component="legend">Account type</FormLabel>
                  <RadioGroup
                    row
                    aria-label="account-type"
                    name="accountType"
                    value={formValues.accountType}
                    onChange={handleChange}
                  >
                    <FormControlLabel
                      value="user"
                      control={<Radio />}
                      label="User"
                    />
                    <FormControlLabel
                      value="restaurant"
                      control={<Radio />}
                      label="Restaurant"
                    />
                  </RadioGroup>
                </FormControl>
              </Box>
              <Typography variant="body" my={4} display="block">
                By creating an account you agree to the{' '}
                <a
                  href="https://www.privacypolicies.com/live/26cc46bd-7288-4c9a-a99d-234ed1f862f0"
                  component={RouterLink}
                  underline="none"
                  target="_blank"
                  rel="noreferrer"
                  sx={{ color: '#189934' }}
                >
                  Privacy Policy{' '}
                </a>
                and to the{' '}
                <Link to="/" component={RouterLink} underline="none">
                  terms of use
                </Link>
              </Typography>
              <Button
                variant="contained"
                fullWidth
                type="submit"
                sx={{ mb: 2 }}
              >
                Create your account
              </Button>
              <Typography
                variant="subtitle"
                fontSize={14}
                position="relative"
                bottom="-45px"
              >
                Already have an account?
                <Button onClick={() => setOpen(true)}>Login</Button>
              </Typography>
              <LoginWindow open={open} handleClose={() => setOpen(false)} />
            </form>
          </Box>
        </Box>
      </Container>
    </>
  );
};
