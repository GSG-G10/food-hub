import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const CartRow = () => (
  <>
    <Box
      display="flex"
      justifyContent="space-around"
      borderBottom="1px solid #C1C1C1"
      pl={3}
      pb={3}
      mb={3}
    >
      <Box width="40%">
        <Typography variant="h4">Barbeque Wings</Typography>
        <Typography variant="caption" fontSize={12} color="primary">
          Orgada Burger
        </Typography>
      </Box>
      <Typography variant="subtitle" width="20%">
        $22.99
      </Typography>
      <Typography variant="subtitle" width="20%">
        2
      </Typography>
      <Typography variant="h4" width="20%">
        $59.98
      </Typography>
    </Box>
  </>
);
