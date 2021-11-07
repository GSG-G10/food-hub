import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import propTypes from 'prop-types';
import { useState } from 'react';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import { useAuthContext } from '../../firebase/firebaseHook';
import { AuthButtons } from './AuthButtons';

export const LoginWindow = ({ open, handleClose }) => {
  const [formValues, setFormValues] = useState({ email: '', password: '' });
  const [passwordError, setPasswordError] = useState(false);
  const { signInWithEmail, loginWithGoogle, loginWithFacebook, error } =
    useAuthContext();
  const history = useHistory();

  const handleChange = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  const { email, password } = formValues;
  const handleSubmit = (event) => {
    event.preventDefault();
    if (password.length < 8) {
      setPasswordError(true);
    } else if (passwordError) setPasswordError(false);
    signInWithEmail(email, password);
  };

  const redirect = () => {
    if (!error) {
      history.push('/');
    }
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      sx={{ display: 'flex', alignItems: 'center' }}
    >
      <Box
        width={{ xs: '90%', md: '70%', lg: '45%' }}
        border="1px solid #ddd"
        p={2}
        display="flex"
        bgcolor="common.white"
        flexDirection="column"
        alignItems="center"
        borderRadius="4px"
        m="auto"
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          width="95%"
          ml="auto"
          mb={1.5}
          mr={0}
        >
          <Typography variant="h2" color="secondary">
            Login
          </Typography>
          <IconButton onClick={handleClose} size="large">
            <CloseIcon color="secondary" />
          </IconButton>
        </Box>
        <Divider width="100%" />
        <Box
          component="form"
          onSubmit={handleSubmit}
          display="flex"
          alignItems="center"
          flexDirection="column"
          width="90%"
          m="auto"
          mb={2}
        >
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
            margin="dense"
            required
            helperText={
              (passwordError
                ? 'Password must contain at least 8 characters'
                : '',
              error ? error.split('/')[1].split(')')[0].replace('-', ' ') : '')
            }
            onChange={handleChange}
          />
          {/* <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            my="1em"
          > */}
          <FormControlLabel
            sx={{
              '& .MuiFormControlLabel-label': {
                fontSize: 14,
              },
              width: '95%',
              mb: 1,
            }}
            control={<Checkbox />}
            label="Keep me logged in"
          />
          {/* <Link
              to="/"
              component={RouterLink}
              underline="none"
              color="secondary"
            >
              Forgot password?
            </Link> */}
          {/* </Box> */}
          <Button
            variant="contained"
            fullWidth
            type="submit"
            onSubmit={redirect}
          >
            Login
          </Button>
          <Divider width="100%" sx={{ my: 2 }} />
          <AuthButtons
            loginWithGoogle={loginWithGoogle}
            loginWithFacebook={loginWithFacebook}
          />
        </Box>
        <Typography variant="body1" fontSize={14}>
          Don&apos;t have an account?{' '}
          <Link
            to="/register"
            component={RouterLink}
            underline="none"
            onClick={handleClose}
          >
            Create an account
          </Link>
        </Typography>
      </Box>
    </Modal>
  );
};

LoginWindow.defaultProps = {
  open: false,
  handleClose: () => {},
};
LoginWindow.propTypes = {
  open: propTypes.bool,
  handleClose: propTypes.func,
};
