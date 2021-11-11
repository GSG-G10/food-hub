import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import { useSnackbar } from 'notistack';
import { api } from '../../api/axios';
import { MealCard } from '../../components/MealCard';
import { CartContext } from '../../context/CartContext';

export const Category = () => {
  const { addMeal } = useContext(CartContext);
  const { id } = useParams();
  const [categoryMeals, setCategoryMeals] = useState([]);
  const [categoryName, setCategoryName] = useState();
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(1);
  const { enqueueSnackbar } = useSnackbar();
  const items = 8;

  useEffect(() => {
    api
      .get(`/meals/category/${id}?items=${items}&page=${page}`)
      .then((response) => {
        setCount(response.data.pagination.count);
        setCategoryMeals(response.data.data);
        setCategoryName(response.data.data[0].category.name);
      });
  }, [id, items, page]);
  const handlePageChange = (event, value) => {
    setPage(value);
  };
  return (
    <Container
      maxWidth="lg"
      sx={{ boxShadow: 'rgb(99 99 99 / 20%) 0px 2px 8px 0px', mb: '4rem' }}
    >
      <Box>
        <Typography variant="h2" pt={6}>
          {categoryName}
        </Typography>
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
          {categoryMeals.map((meal) => (
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
