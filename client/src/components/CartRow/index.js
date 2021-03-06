import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import propTypes from 'prop-types';

export const CartRow = ({ handleQtyChange, meal, handleDeleteMeal }) => {
  const { name, price, quantity, category } = meal;

  return (
    <>
      <Box
        display="flex"
        justifyContent="space-around"
        borderBottom="1px solid #C1C1C1"
        pl={3}
        pb={3}
        mb={3}
      >
        <Box width="40%">
          <Typography variant="h4">{name}</Typography>
          <Typography variant="caption" fontSize={12} color="primary">
            {category.name}
          </Typography>
        </Box>
        <Typography variant="subtitle" width="20%">
          ${price}
        </Typography>
        <Box width="20%">
          <input
            id="quantity"
            type="number"
            value={quantity}
            min="1"
            onChange={handleQtyChange}
            style={{
              width: '35px',
              borderRadius: '0',
              border: 0,
              textAlign: 'center',
            }}
          />
        </Box>
        <Typography variant="h4" width="15%">
          ${price * quantity}
        </Typography>
        <IconButton aria-label="delete" onClick={handleDeleteMeal}>
          <DeleteIcon />
        </IconButton>
      </Box>
    </>
  );
};

CartRow.defaultProps = {
  handleQtyChange: () => {},
  handleDeleteMeal: () => {},
  meal: {
    id: -1,
    name: '',
    price: -1,
    quantity: -1,
    category: {},
  },
};
CartRow.propTypes = {
  handleQtyChange: propTypes.func,
  handleDeleteMeal: propTypes.func,
  meal: propTypes.shape({
    id: propTypes.number,
    name: propTypes.string,
    price: propTypes.number,
    quantity: propTypes.number,
    category: propTypes.shape({ name: propTypes.string }),
  }),
};
