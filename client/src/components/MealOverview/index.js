import Box from '@mui/material/Box';
import propTypes from 'prop-types';
import { MealSwiper } from './MealSwiper';
import { MealDetails } from './MealDetails';

export const MealOverview = ({ mealData }) => {
  const { id, name, images, price } = mealData;
  return (
    <Box display="flex">
      <MealSwiper mealImages={images} mealName={name} mealId={id} />
      <MealDetails mealName={name} mealPrice={price} />
    </Box>
  );
};

MealOverview.defaultProps = {
  mealData: [],
};

MealOverview.propTypes = {
  mealData: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number,
      name: propTypes.string,
      images: propTypes.arrayOf,
      price: propTypes.number,
    })
  ),
};
