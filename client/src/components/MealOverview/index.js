import Box from '@mui/material/Box';
import propTypes from 'prop-types';
import { MealSwiper } from './MealSwiper';
import { MealDetails } from './MealDetails';

export const MealOverview = ({ meal }) => (
  <Box display="flex">
    <MealSwiper meal={meal} />
    <MealDetails meal={meal} />
  </Box>
);

MealOverview.defaultProps = {
  meal: {},
};
MealOverview.propTypes = {
  meal: propTypes.shape({}),
};
