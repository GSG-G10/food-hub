import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import Box from '@mui/material/Box';
import propTypes from 'prop-types';

import 'swiper/swiper.min.css'; // core Swiper
import 'swiper/modules/navigation/navigation';
import 'swiper/modules/free-mode/free-mode';
import 'swiper/modules/thumbs/thumbs';
import './style.css';

import SwiperCore, { FreeMode, Navigation, Thumbs } from 'swiper';

SwiperCore.use([FreeMode, Navigation, Thumbs]);

export const MealSwiper = ({ mealImages, mealName }) => {
  mealImages.push(mealImages[0]);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <Box width="50%" height="100%">
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        spaceBetween={15}
        navigation
        thumbs={{ swiper: thumbsSwiper }}
        className="mySwiper2"
      >
        {mealImages.map((img) => (
          <SwiperSlide>
            <img src={img} alt={mealName} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={15}
        slidesPerView={3}
        freeMode
        watchSlidesProgress
        className="mySwiper"
      >
        {mealImages.map((img) => (
          <SwiperSlide>
            <img src={img} alt={mealName} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

MealSwiper.defaultProps = {
  mealImages: [],
  mealName: '',
};
MealSwiper.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  mealImages: propTypes.any,
  mealName: propTypes.string,
};