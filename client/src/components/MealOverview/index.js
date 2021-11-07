import Box from '@mui/material/Box';
import propTypes from 'prop-types';
import { MealSwiper } from './MealSwiper';
import { MealDetails } from './MealDetails';

export const MealOverview = ({ mealData }) => {
  const { name, images } = mealData;
  return (
    <Box display="flex">
      <MealSwiper mealImages={images} mealName={name} />
      <MealDetails mealName={name} />
    </Box>
  );
};

MealOverview.defaultProps = {
  mealData: {},
};

MealOverview.propTypes = {
  mealData: propTypes.shape({
    name: propTypes.string,
    images: propTypes.string,
  }),
};
