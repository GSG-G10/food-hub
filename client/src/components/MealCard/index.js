import React from 'react';
import propTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export const MealCard = ({ mealImage, mealName, mealCategory, mealPrice }) => {
  const handleClick = () => {};
  const handleAddClick = () => {};
  return (
    <Card sx={{ maxWidth: 220 }} variant="outlined">
      <CardActionArea onClick={handleClick}>
        <Box>
          <CardMedia
            component="img"
            height="150"
            image={mealImage}
            alt={mealName}
          />
        </Box>
        <CardContent sx={{ padding: '0.6rem 1rem 0.8rem' }}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={1}
          >
            <Typography gutterBottom variant="h4" component="div">
              {mealName}
            </Typography>
            <IconButton
              aria-label="add to cart"
              size="small"
              onClick={handleAddClick}
            >
              <AddShoppingCartIcon color="secondary" fontSize="14" />
            </IconButton>
          </Box>

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="subtitle" color="primary.main">
              {mealCategory}
            </Typography>
            <Typography variant="subtitle" color="text.secondary">
              {mealPrice}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

MealCard.defaultProps = {
  mealImage: '',
  mealName: '',
  mealCategory: '',
  mealPrice: '',
};
MealCard.propTypes = {
  mealImage: propTypes.string,
  mealName: propTypes.string,
  mealCategory: propTypes.string,
  mealPrice: propTypes.number,
};
