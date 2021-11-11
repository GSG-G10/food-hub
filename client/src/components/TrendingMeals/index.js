import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import { api } from '../../api/axios';

export const TrendingMeals = () => {
  const history = useHistory();

  const [trendsMeals, setTrendsMeals] = useState([]);

  useEffect(() => {
    api.get(`/meals/category/1?items=3`).then((response) => {
      setTrendsMeals(response.data.data);
    });
  }, []);
  return (
    <>
      <Typography variant="h1" sx={{ mt: '4rem', mb: '2rem' }}>
        Trending Meals
      </Typography>
      <Box
        mt={6}
        display="grid"
        gridTemplateColumns={{
          xs: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
          xl: 'repeat(3, 1fr)',
        }}
        sx={{ gridGap: '30px' }}
      >
        {trendsMeals.map(({ id, name, images, category }) => (
          <Card variant="outlined">
            <CardActionArea
              component="div"
              onClick={() => {
                history.push(`/meal/${id}`);
                window.scrollTo(0, 0);
              }}
            >
              <Box>
                <CardMedia
                  component="img"
                  height="200"
                  image={images[0]}
                  alt={name}
                />
              </Box>
              <CardContent sx={{ padding: '0.6rem 1rem 0.8rem' }}>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  mb={1}
                >
                  <Typography gutterBottom variant="h4" component="div">
                    {name}
                  </Typography>
                </Box>

                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography variant="subtitle" color="primary.main">
                    {category.name}
                  </Typography>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </>
  );
};
