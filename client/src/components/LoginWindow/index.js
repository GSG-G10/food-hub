import { useState } from 'react';
import propTypes from 'prop-types';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';
import CloseIcon from '@mui/icons-material/Close';
import Modal from '@mui/material/Modal';
import { AuthButtons } from './AuthButtons';

export const LoginWindow = ({ open, handleClose }) => {
  const [email, setEamil] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const handleChange = (event) => {
    if (event.target.name === 'email') {
      setEamil(event.target.value);
    } else {
      setPassword(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password.length >= 8) {
      console.log(`email: ${email}`);
      console.log(`password: ${password}`);
    } else {
      setPasswordError(true);
    }
  };
  const isXs = useMediaQuery((theme) => theme.breakpoints.up('xs'));
  const isMd = useMediaQuery((theme) => theme.breakpoints.up('md'));
  const isLg = useMediaQuery((theme) => theme.breakpoints.up('lg'));

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
        // eslint-disable-next-line no-nested-ternary
        width={isLg ? `35%` : isMd ? '70%' : isXs ? '90%' : '90%'}
        border="1px solid #ddd"
        padding="4rem 4rem 6rem"
        display="flex"
        bgcolor="common.white"
        flexDirection="column"
        alignItems="center"
        borderRadius="4px"
        margin="auto"
        position="absolute"
        left="0"
        right="0"
      >
        <Button
          onClick={handleClose}
          sx={{ position: 'absolute', right: '0.4em', top: '0.6em' }}
        >
          <CloseIcon color="secondary" />
        </Button>
        <Typography variant="h2" marginBottom="1.5em" color="secondary">
          Login
        </Typography>

        <AuthButtons />

        <Typography variant="subtitle">OR</Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            id="email"
            name="email"
            label="email"
            type="email"
            value={email}
            fullWidth
            size="small"
            margin="dense"
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
              passwordError ? 'Password must contain at least 8 characters' : ''
            }
            onChange={handleChange}
          />
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            margin="1em 0"
          >
            <FormControlLabel
              sx={{
                '& .MuiFormControlLabel-label': {
                  fontSize: 16,
                },
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
          </Box>
          <Button
            variant="contained"
            fullWidth
            type="submit"
            sx={{ height: '45px', marginBottom: '1em' }}
          >
            Login
          </Button>
        </form>
        <Typography position="relative" bottom="-45px">
          Don&apos;t have an account?{' '}
          <Link to="/" component={RouterLink} underline="none">
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
