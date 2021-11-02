import React from 'react';
import propTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import MapIcon from '@mui/icons-material/Map';
import BG from '../../assets/restaurant.jpg';

export const RestaurantOverview = ({
  restaurantLogo,
  restaurantName,
  restaurantLocation,
  restaurantDesc,
  lat,
  lon,
  phone,
  email,
}) => (
  <>
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
              style={{ width: '100%', height: '130px', objectFit: 'cover' }}
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
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width="80%"
        >
          <Box>Rating</Box>
          <Box>
            <Link href={`mailto:${email}`} target="_blank">
              <IconButton aria-label="email" size="small">
                <EmailOutlinedIcon color="white" fontSize="inherit" />
              </IconButton>
            </Link>
            <Link href={`tel:${phone}`} target="_blank">
              <IconButton aria-label="phone" size="small">
                <LocalPhoneIcon color="white" fontSize="inherit" />
              </IconButton>
            </Link>
            <Link
              href={`https://maps.google.com?q=${lat},${lon}`}
              target="_blank"
            >
              <IconButton aria-label="map" size="small">
                <MapIcon color="white" fontSize="inherit" />
              </IconButton>
            </Link>
          </Box>
        </Box>
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
  </>
);

RestaurantOverview.defaultProps = {
  restaurantLogo: '',
  restaurantName: '',
  restaurantLocation: '',
  // restaurantOrders: '',
  restaurantDesc: '',
  lat: '',
  lon: '',
  phone: '',
  email: '',
};
RestaurantOverview.propTypes = {
  restaurantLogo: propTypes.string,
  restaurantName: propTypes.string,
  restaurantLocation: propTypes.string,
  // restaurantOrders: propTypes.number,
  restaurantDesc: propTypes.string,
  lat: propTypes.number,
  lon: propTypes.number,
  phone: propTypes.string,
  email: propTypes.string,
};
