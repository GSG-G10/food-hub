import { useEffect, useState, forwardRef } from 'react';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { api } from '../../api/axios';
import { MealCard } from '../../components/MealCard';
import { RestaurantOverview } from '../../components/RestaurantOverview';

export const Restaurant = () => {
  const { id } = useParams();
  const [restaurantData, setRestaurantData] = useState({});
  const [restaurantMeals, setRestaurantMeals] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const [open, setOpen] = useState(false);

  const items = 8;

  useEffect(() => {
    api.get(`/restaurants/${id}`).then((res) => {
      if (res.data.data[0] !== undefined) {
        setRestaurantData(res.data.data[0]);
      } else {
        // here I want to redirect to NotFound page
      }
    });
  }, [id]);

  useEffect(() => {
    api
      .get(`/meals/restaurant/${id}?items=${items}&page=${page}`)
      .then((response) => {
        setCount(response.data.pagination.count);
        setRestaurantMeals(response.data.data);
      });
  }, [id, items, page]);
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
  const handlePageChange = (event, value) => {
    setPage(value);
  };
  const {
    logoUrl,
    restaurantName,
    restaurantFullAddress,
    description,
    lon,
    lat,
    contactEmail,
    restaurantPhone,
  } = restaurantData;
  return (
    <Container
      maxWidth="lg"
      sx={{ boxShadow: 'rgb(99 99 99 / 20%) 0px 2px 8px 0px', mb: '4rem' }}
    >
      <Box mb={12}>
        <RestaurantOverview
          restaurantLogo={logoUrl}
          restaurantName={restaurantName}
          restaurantLocation={restaurantFullAddress}
          restaurantDesc={description}
          lon={lon}
          lat={lat}
          email={contactEmail}
          phone={restaurantPhone}
        />
      </Box>
      <Box>
        <Typography variant="h2">Restaurant Meals</Typography>
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
          {restaurantMeals.map(({ id: mealId, images, name }) => (
            <MealCard
              key={mealId}
              mealId={mealId}
              mealImage={images[0]}
              mealName={name}
              setAddedToCart={setAddedToCart}
              addedToCart={addedToCart}
              setOpen={setOpen}
              // mealCategory
              // mealPrice
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
        <Pagination
          count={Math.ceil(count / items)}
          variant="outlined"
          shape="rounded"
          color="primary"
          page={page}
          onChange={handlePageChange}
          sx={{ display: 'flex', justifyContent: 'center', py: '3rem' }}
        />
      </Box>
    </Container>
  );
};
