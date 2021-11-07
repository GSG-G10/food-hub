import { useState, useEffect, forwardRef } from 'react';
import Container from '@mui/material/Container';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { MealOverview } from '../../components/MealOverview';
import { api } from '../../api/axios';
import { MealCard } from '../../components/MealCard';

export const Meal = () => {
  const { id } = useParams();
  const [mealData, setMealData] = useState();
  const [relatedMeals, setRelatedMeals] = useState([]);
  const [restaurantId, setRestaurantId] = useState();
  const [addedToCart, setAddedToCart] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    api.get(`/meals/${id}`).then((res) => {
      setRestaurantId(res.data[0].restaurantId);
      setMealData(res.data[0]);
      api
        .get(`/meals/restaurant/${restaurantId}`)
        .then((result) => setRelatedMeals(result.data.data));
    });
  }, [id, restaurantId]);

  const Alert = forwardRef(function Alert(props, ref) {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  return (
    <Container
      maxWidth="lg"
      sx={{
        boxShadow: 'rgb(99 99 99 / 20%) 0px 2px 8px 0px',
        mb: '4rem',
        pt: '2rem',
      }}
    >
      <MealOverview mealData={mealData} />
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
          {relatedMeals.map(({ id: mealId, images, name }) => (
            <MealCard
              key={mealId}
              mealId={mealId}
              mealImage={JSON.parse(images)[0]}
              mealName={name}
              setAddedToCart={setAddedToCart}
              addedToCart={addedToCart}
              setOpen={setOpen}
            />
          ))}
          {addedToCart ? (
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert
                onClose={handleClose}
                severity="success"
                sx={{ width: '100%' }}
              >
                The meal added successfully to cart
              </Alert>
            </Snackbar>
          ) : (
            ''
          )}
        </Box>
      </Box>
    </Container>
  );
};
