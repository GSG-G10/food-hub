import { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import { api } from '../../api/axios';
import { RestaurantCard } from '../../components/RestaurantCard';

export const Restaurants = () => {
  const [restarants, setRestaurants] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  useEffect(() => {
    api
      .get('/restaurant')
      .then((response) => setRestaurants(response.data.data));
  }, []);
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <Container
      maxWidth="lg"
      sx={{ display: 'flex', flexDirection: 'column', mt: '2rem' }}
    >
      <Typography variant="h1" fontWeight="500">
        All Restaurants
      </Typography>
      <FormControl
        variant="outlined"
        size="small"
        sx={{ alignSelf: 'self-end' }}
      >
        <InputLabel htmlFor="search-field">Search</InputLabel>
        <OutlinedInput
          id="search-field"
          type="text"
          value={searchValue}
          size="small"
          onChange={handleChange}
          endAdornment={
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>
      <Box
        mt={6}
        display="grid"
        gridTemplateColumns={{
          xs: 'repeat(1, 1fr)',
          md: 'repeat(3, 1fr)',
          lg: 'repeat(4, 1fr)',
          xl: 'repeat(5, 1fr)',
        }}
        sx={{ gridGap: '30px' }}
      >
        {restarants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.userId}
            restaurantLogo={restaurant.logoUrl}
            restaurantName={restaurant.restaurantName}
          />
        ))}
      </Box>
    </Container>
  );
};
