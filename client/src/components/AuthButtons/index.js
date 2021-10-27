import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import { ReactComponent as GoogleSvg } from '../../assets/google-icon.svg';

export const AuthButtons = () => (
  <Box display="flex" flexDirection="column" width="100%">
    <Button
      variant="contained"
      color="white"
      sx={{
        marginBottom: '1em',
        fontWeight: '400',
      }}
    >
      <GoogleSvg width="25px" style={{ position: 'absolute', left: '15px' }} />
      Continue with Google
    </Button>
    <Button
      variant="contained"
      sx={{
        backgroundColor: '#5777B9',
        marginBottom: '1em',
        fontWeight: '400',
      }}
    >
      <FacebookOutlinedIcon sx={{ position: 'absolute', left: '15px' }} />
      Continue with Facebook
    </Button>
  </Box>
);
