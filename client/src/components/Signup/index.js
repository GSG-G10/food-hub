import { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';
import { AuthButtons } from '../AuthButtons';

export const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEamil] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  const handleChange = (event) => {
    if (event.target.name === 'username') {
      setUsername(event.target.value);
    } else if (event.target.name === 'email') {
      setEamil(event.target.value);
    } else if (event.target.name === 'password') {
      setPassword(event.target.value);
    } else {
      setConfirmPassword(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password.length < 8) {
      setPasswordError(true);
    } else if (password !== confirmPassword) {
      setConfirmPasswordError(true);
    }
  };
  return (
    <Box>
      <Container maxWidth="lg">
        <Box
          boxShadow="rgb(99 99 99 / 20%) 0px 2px 8px 0px"
          py={8}
          px={24}
          mt={4}
          mb={8}
          display="flex"
          flexDirection="column"
          alignItems="center"
          textAlign="center"
        >
          <Typography
            variant="h1"
            fontWeight="500"
            marginBottom="1.5em"
            color="secondary"
          >
            Create an Account
          </Typography>
          <AuthButtons />
          <Typography variant="subtitle">OR</Typography>
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
              id="confirmpassword"
              name="confirmpassword"
              label="Confirm Password"
              type="password"
              value={confirmPassword}
              fullWidth
              size="small"
              margin="normal"
              required
              helperText={confirmPasswordError ? 'Passwrod do NOT match' : ''}
              onChange={handleChange}
            />
            <Typography variant="body">
              By creating an account you agree to the{' '}
              <Link to="/" component={RouterLink} underline="none">
                Privacy Policy{' '}
              </Link>
              and to the{' '}
              <Link to="/" component={RouterLink} underline="none">
                terms of use
              </Link>
            </Typography>
            <Button
              variant="contained"
              fullWidth
              type="submit"
              sx={{ height: '2.5em', marginBottom: '1em' }}
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
              <Button>Login</Button>
            </Typography>
          </form>
        </Box>
      </Container>
    </Box>
  );
};
