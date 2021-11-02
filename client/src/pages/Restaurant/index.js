import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import { api } from '../../api/axios';
import { MealCard } from '../../components/MealCard';
import { RestaurantOverview } from '../../components/RestaurantOverview';

export const Restaurant = () => {
  const { id } = useParams();
  const [restaurantData, setRestaurantData] = useState({});
  const [restaurantMeals, setRestaurantMeals] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(1);
  const items = 10;
  useEffect(() => {
    api.get(`/restaurants/${id}`).then((res) => setRestaurantData(res.data[0]));
  }, [id]);

  useEffect(() => {
    api
      .get(`/meals/restaurant/${id}?items=${items}&page=${page}`)
      .then((response) => {
        setCount(response.data.count);
        setRestaurantMeals(response.data.data);
      });
  }, [id, items, page]);
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
            xl: 'repeat(5, 1fr)',
          }}
          sx={{ gridGap: '30px' }}
        >
          {restaurantMeals.map(({ images, name }) => (
            <MealCard
              mealImage={JSON.parse(images)[0]}
              mealName={name}
              mealCategory
              mealPrice
            />
          ))}
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
