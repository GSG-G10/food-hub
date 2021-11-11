import Container from '@mui/material/Container';
import { MainSlide } from '../../components/MainSlide';
import { CategoriesSwiper } from '../../components/CategoriesSwiper';
import { TrendingMeals } from '../../components/TrendingMeals';

export const LandingPage = () => (
  <>
    <MainSlide />
    <Container
      maxWidth="lg"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        mb: '4rem',
        pt: '2rem',
      }}
    >
      <CategoriesSwiper />
      <TrendingMeals />
    </Container>
  </>
);
