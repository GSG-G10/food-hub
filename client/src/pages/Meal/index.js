import { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import { useParams } from 'react-router-dom';
import { MealOverview } from '../../components/MealOverview';
import { api } from '../../api/axios';

export const Meal = () => {
  const { id } = useParams();
  const [mealData, setMealData] = useState();

  useEffect(() => {
    api.get(`/meals/${id}`).then((res) => setMealData(res.data[0]));
  }, [id]);

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
    </Container>
  );
};
