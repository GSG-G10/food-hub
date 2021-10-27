import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GoogleIcon from '@mui/icons-material/Google';

export const AuthButtons = () => (
  <Box display="flex" flexDirection="column" width="100%">
    <Button
      variant="contained"
      color="white"
      sx={{
        mb: 2,
        fontWeight: '400',
        '.MuiButton-startIcon': {
          marginRight: '10px',
        },
      }}
      startIcon={<GoogleIcon />}
    >
      Continue with Google
    </Button>
    <Button
      variant="contained"
      sx={{
        backgroundColor: '#5777B9',
        '.MuiButton-startIcon': {
          marginRight: '10px',
        },
      }}
      startIcon={<FacebookOutlinedIcon />}
    >
      Continue with Facebook
    </Button>
  </Box>
);
