import React from 'react';
import propTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import BG from '../../assets/restaurant.jpg';

export const RestaurantOverview = ({
  restaurantLogo,
  restaurantName,
  restaurantLocation,
  restaurantOrders,
  restaurantDesc,
}) => (
  <Box boxShadow="rgb(99 99 99 / 20%) 0px 2px 8px 0px">
    <Box
      sx={{
        backgroundImage: `url(${BG})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="start"
    >
      <Box
        bgcolor="#0000008f"
        color="common.white"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
        width={{ xs: '90%', md: '70%', lg: '40%' }}
        borderRadius="20px"
        mt={4}
        py={4}
        mb={8}
      >
        <Box display="flex" flexDirection="column" alignItems="center" mb={1.8}>
          <Box
            width="130px"
            height="130px"
            overflow="hidden"
            borderRadius="4px"
          >
            <img
              src={restaurantLogo}
              alt={restaurantName}
              style={{ width: '100%', objectFit: 'cover' }}
            />
          </Box>
          <Typography
            variant="h2"
            fontWeight={500}
            color="primary"
            mt={2}
            mb={0.5}
          >
            {restaurantName}
          </Typography>
          <Typography variant="subtitle" fontSize={12}>
            {restaurantLocation}
          </Typography>
        </Box>
        <Typography variant="body">{restaurantOrders}</Typography>
      </Box>
    </Box>
    <Box
      bgcolor="common.white"
      py={4}
      px={2}
      borderTop="6px solid"
      borderColor="primary.main"
      width="90%"
      mx="auto"
      mt={-6}
      boxShadow="rgb(99 99 99 / 20%) 0px 2px 8px 0px"
    >
      <Typography variant="h3" color="primary" mb={2}>
        {restaurantName} delivers to you
      </Typography>
      <Typography variant="body" fontSize={12}>
        {restaurantDesc}
      </Typography>
    </Box>
  </Box>
);

RestaurantOverview.defaultProps = {
  restaurantLogo: '',
  restaurantName: '',
  restaurantLocation: '',
  restaurantOrders: '',
  restaurantDesc: '',
};
RestaurantOverview.propTypes = {
  restaurantLogo: propTypes.string,
  restaurantName: propTypes.string,
  restaurantLocation: propTypes.string,
  restaurantOrders: propTypes.number,
  restaurantDesc: propTypes.string,
};
