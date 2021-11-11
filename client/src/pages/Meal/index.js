import { useState, useEffect, useContext } from 'react';
import Container from '@mui/material/Container';
import { useParams, useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useSnackbar } from 'notistack';
import { MealOverview } from '../../components/MealOverview';
import { api } from '../../api/axios';
import { MealCard } from '../../components/MealCard';
import { CartContext } from '../../context/CartContext';

export const Meal = () => {
  const { addMeal } = useContext(CartContext);
  const history = useHistory();
  const { id } = useParams();
  const [mealData, setMealData] = useState({
    id: -1,
    images: [],
    name: 'loading',
    price: -1,
    category: {},
  });
  const [relatedMeals, setRelatedMeals] = useState([]);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    api.get(`/meals/${id}`).then((res) => {
      if (res.data.data[0] !== undefined) {
        setMealData(res.data.data[0]);
        api
          .get(`/meals/restaurant/${res.data.data[0].restaurantId}`)
          .then((result) => setRelatedMeals(result.data.data));
      } else {
        history.push('/notfound');
      }
    });
  }, [id, history]);

  return (
    <Container
      maxWidth="lg"
      sx={{
        boxShadow: 'rgb(99 99 99 / 20%) 0px 2px 8px 0px',
        mb: '4rem',
        pt: '2rem',
      }}
    >
      <MealOverview meal={mealData} />
      <Box mt={14} pb={12}>
        <Typography variant="h2">Related Meals</Typography>
        <Box
          mt={6}
          display="grid"
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
            lg: 'repeat(4, 1fr)',
            xl: 'repeat(4, 1fr)',
          }}
          sx={{ gridGap: '30px' }}
        >
          {relatedMeals.map((meal) => (
            <MealCard
              key={meal.id}
              meal={meal}
              handleAddClick={(e) => {
                e.stopPropagation();
                addMeal(meal);
                enqueueSnackbar('The meal added successfully to cart', {
                  variant: 'success',
                });
              }}
            />
          ))}
        </Box>
      </Box>
    </Container>
  );
};
