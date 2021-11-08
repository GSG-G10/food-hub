import { useHistory } from 'react-router-dom';
import propTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export const MealCard = ({ meal, handleAddClick }) => {
  const { id, name, price, images } = meal;
  // const { addMeal } = useContext(CartContext);
  const history = useHistory();
  const handleClick = () => {
    history.push(`/meal/${id}`);
    window.scrollTo(0, 0);
  };
  return (
    <>
      <Card variant="outlined">
        <CardActionArea component="div" onClick={handleClick}>
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
              <IconButton
                aria-label="add to cart"
                size="small"
                onClick={handleAddClick}
              >
                <AddShoppingCartIcon color="secondary" fontSize="14" />
              </IconButton>
            </Box>

            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              {/* <Typography variant="subtitle" color="primary.main">
                {mealCategory}
              </Typography> */}
              <Typography variant="subtitle" color="text.secondary">
                ${price}
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};
MealCard.defaultProps = {
  handleAddClick: () => {},
  meal: {
    id: -1,
    name: '',
    price: -1,
    images: [],
  },
};
MealCard.propTypes = {
  handleAddClick: propTypes.func,
  meal: propTypes.shape({
    id: propTypes.number,
    name: propTypes.string,
    price: propTypes.number,
    images: propTypes.arrayOf(propTypes.string),
  }),
};
