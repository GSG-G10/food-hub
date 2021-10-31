import React from 'react';
import propTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';

export const RestaurantCard = ({
  restaurantLogo,
  restaurantName,
  mealCategory,
}) => {
  const handleClick = () => {};
  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardActionArea onClick={handleClick}>
        <Box display="flex" alignItems="center" justifyContent="center" py={2}>
          <CardMedia
            component="img"
            height="150"
            sx={{ width: '170px' }}
            image={restaurantLogo}
            alt="green iguana"
          />
        </Box>
        <CardContent sx={{ borderTop: '1px solid rgb(241 241 241)' }}>
          <Typography gutterBottom variant="h4" component="div">
            {restaurantName}
          </Typography>
          <Typography variant="subtitle" color="text.secondary">
            {mealCategory}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

RestaurantCard.defaultProps = {
  restaurantLogo: '',
  restaurantName: '',
  mealCategory: '',
};
RestaurantCard.propTypes = {
  restaurantLogo: propTypes.string,
  restaurantName: propTypes.string,
  mealCategory: propTypes.string,
};
