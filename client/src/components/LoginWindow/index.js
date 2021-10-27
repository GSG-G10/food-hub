import { useState } from 'react';
import propTypes from 'prop-types';
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
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
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
    if (password.length < 8) {
      setPasswordError(true);
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
          // justifyContent="space-between"
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
              passwordError ? 'Password must contain at least 8 characters' : ''
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
          <Button variant="contained" fullWidth type="submit">
            Login
          </Button>
          <Divider width="100%" sx={{ my: 2 }} />
          <AuthButtons />
        </Box>
        <Typography variant="body1" fontSize={14}>
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
