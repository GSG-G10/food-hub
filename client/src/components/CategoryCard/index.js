import React from 'react';
import propTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';

export const CategoryCard = ({ categoryImage, categoryName }) => {
  const handleClick = () => {};
  return (
    <Card sx={{ maxWidth: 200, height: '300px' }}>
      <CardActionArea onClick={handleClick}>
        <Box>
          <CardMedia
            component="img"
            height="300"
            image={categoryImage}
            alt={categoryName}
          />
        </Box>
        <CardContent sx={{ position: 'absolute', bottom: '0', right: '10px' }}>
          <Typography
            gutterBottom
            variant="h3"
            color="common.white"
            fontSize="1.2rem"
          >
            {categoryName}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

CategoryCard.defaultProps = {
  categoryImage: '',
  categoryName: '',
};
CategoryCard.propTypes = {
  categoryImage: propTypes.string,
  categoryName: propTypes.string,
};
