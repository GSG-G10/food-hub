import React from 'react';
import Container from '@mui/material/Container';
import { Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Img1 from '../../assets/slide1.png';

export const MainSlide = () => (
  <Box
    bgcolor="rgba(255, 90, 0, 0.33)"
    height="100vh"
    overflow="hidden"
    display="flex"
    alignItems="center"
    justifyContent="center"
  >
    <Container
      maxWidth="lg"
      height="100%"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
      }}
    >
      <Box width={{ sx: '100%', md: '50%' }}>
        <Typography variant="h2" mb={4} fontSize="2.5rem">
          Order breakfast, lunch, and dinner.
        </Typography>
        <Button variant="outlined" size="large">
          Order Now
        </Button>
      </Box>
      <Box width="50%">
        <img src={Img1} alt="slide1" style={{ width: '100%' }} />
      </Box>
    </Container>
  </Box>
);
