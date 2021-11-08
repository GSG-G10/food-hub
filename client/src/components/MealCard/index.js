import { useContext } from 'react';
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
import { CartContext } from '../../context/CartContext';

export const MealCard = ({
  mealId,
  mealImage,
  mealName,
  // mealCategory,
  // mealPrice,
  setAddedToCart,
  setOpen,
}) => {
  const { setCart } = useContext(CartContext);
  const history = useHistory();
  const handleAddClick = (e) => {
    e.stopPropagation();
    setCart((prev) => [...prev, { mealId, mealImage, mealName }]);
    setAddedToCart(true);
    setOpen(true);
  };
  const handleClick = () => {
    history.push(`/meal/${mealId}`);
  };
  return (
    <>
      <Card variant="outlined">
        <CardActionArea onClick={handleClick}>
          <Box>
            <CardMedia
              component="img"
              height="200"
              image={mealImage}
              alt={mealName}
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
                {mealName}
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
            </Typography>
            <Typography variant="subtitle" color="text.secondary">
              {mealPrice}
            </Typography> */}
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};
MealCard.defaultProps = {
  mealId: '',
  mealImage: '',
  mealName: '',
  // mealCategory: '',
  // mealPrice: '',
  setAddedToCart: () => {},
  setOpen: () => {},
};
MealCard.propTypes = {
  mealId: propTypes.number,
  mealImage: propTypes.string,
  mealName: propTypes.string,
  // mealCategory: propTypes.string,
  // mealPrice: propTypes.number,
  setAddedToCart: propTypes.func,
  setOpen: propTypes.func,
};
