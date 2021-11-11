import Box from '@mui/material/Box';
import React from 'react';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import Image from '../../assets/404.jpeg';

export const NotFound = () => (
  <Box
    sx={{ background: 'linear-gradient(#f3efec, #e3ded8)' }}
    display="flex"
    justifyContent="center"
    alignItems="center"
    flexDirection="column"
  >
    <img src={Image} alt="NotFound" />
    <Link component={RouterLink} to="/" mt={4} mb={6}>
      Go to Home
    </Link>
  </Box>
);
