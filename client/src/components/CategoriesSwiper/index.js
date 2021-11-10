import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import './style.css';
import 'swiper/modules/pagination/pagination';
import 'swiper/swiper.min.css'; // core Swiper
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import SwiperCore, { Navigation } from 'swiper';
import { api } from '../../api/axios';

import 'swiper/modules/navigation/navigation';

SwiperCore.use([Navigation]);

export const CategoriesSwiper = () => {
  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const item = 6;
  useEffect(() => {
    api.get(`/category?items=${item}`).then((response) => {
      setCategories(response.data.data);
    });
  }, [item]);

  return (
    <>
      <Typography
        variant="h1"
        textAlign="center"
        sx={{ mt: '4rem', mb: '2rem' }}
      >
        Browse Categories
      </Typography>
      <Swiper
        style={{ width: '800px' }}
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        className="cat-swiper"
      >
        {categories.map(({ id, name, image }) => (
          <SwiperSlide key={id}>
            <Card sx={{ height: '380px' }}>
              <CardActionArea onClick={() => history.push(`/category/${id}`)}>
                <Box sx={{ filter: 'brightness(0.7)' }}>
                  <CardMedia
                    component="img"
                    height="380"
                    image={image}
                    alt={name}
                  />
                </Box>
                <CardContent
                  sx={{ position: 'absolute', bottom: '0', right: '10px' }}
                >
                  <Typography
                    gutterBottom
                    variant="h3"
                    color="common.white"
                    fontSize="1.2rem"
                  >
                    {name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
