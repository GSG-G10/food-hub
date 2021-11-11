/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState, useContext } from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Rating from '@mui/material/Rating';
import './style.css';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import propTypes from 'prop-types';
import { useSnackbar } from 'notistack';
import { CartContext } from '../../../context/CartContext';

export const MealDetails = ({ meal }) => {
  const { addMeal } = useContext(CartContext);
  const { name, price, category } = meal;
  const [value, setValue] = useState(2);
  const [qty, setQyantity] = useState(1);
  const [size, setSize] = useState('S');
  const { enqueueSnackbar } = useSnackbar();

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      pl={{ md: '2rem' }}
      py={1.8}
      justifyContent="space-between"
      width={{ xs: '100%', md: '50%' }}
    >
      <Typography variant="h2">{name}</Typography>
      <Box display="flex" justifyContent="space-between" my={3}>
        <Typography variant="caption" color="primary">
          {category.name}
        </Typography>
        <Box display="flex" alignItems="center">
          <Rating
            name="simple-controlled"
            defaultValue={4.5}
            value={value}
            size="small"
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
          <Typography variant="caption">(2566 Rating)</Typography>
        </Box>
      </Box>

      <Typography variant="h2">${price}</Typography>
      <Typography variant="body" textAlign="justify" my={3}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae
        neque quis ipsum pellentesque commodo. Ut id mollis ipsum, sed hendrerit
        ligula. Nam fringilla nulla accumsan dapibus laoreet. Ut sed nisl sem.
        In pretium ante libero, eu blandit leo elementum vel. Vivamus feugiat
        felis vitae urna tempor pulvinar. Aenean posuere mi ut accumsan laoreet.
        Duis lacinia dolor eu dolor iaculis, vitae aliquam sapien bibendum.
      </Typography>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={4}
      >
        <Typography variant="h2">
          $
          {qty * price +
            // eslint-disable-next-line no-nested-ternary
            (size === 'M' ? 0.2 * price : size === 'L' ? 0.4 * price : 0)}
        </Typography>
        <Box display="flex" alignItems="center">
          <FormControl>
            <Typography variant="caption">QTY</Typography>
            <input
              id="quantity"
              type="number"
              value={qty}
              onChange={(e) => {
                setQyantity(e.target.value);
              }}
              style={{
                width: '45px',
                marginRight: '2rem',
                borderRadius: '0',
                border: '2px solid #000',
                height: '36px',
                textAlign: 'center',
              }}
            />
          </FormControl>
          <FormControl>
            <Typography variant="caption">SIZE</Typography>
            <Box>
              <input
                type="radio"
                id="small"
                className="size-radio"
                name="size"
                value="S"
                onChange={handleSizeChange}
                checked={size === 'S'}
              />
              <label htmlFor="small" className="size-label">
                S
              </label>

              <input
                type="radio"
                id="medium"
                className="size-radio"
                name="size"
                value="M"
                onChange={handleSizeChange}
                checked={size === 'M'}
              />
              <label htmlFor="medium" className="size-label">
                M
              </label>

              <input
                type="radio"
                id="large"
                className="size-radio"
                name="size"
                value="L"
                onChange={handleSizeChange}
                checked={size === 'L'}
              />
              <label htmlFor="large" className="size-label">
                L
              </label>
            </Box>
          </FormControl>
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" alignSelf="self-end">
        <Button variant="contained" sx={{ mr: '1rem' }}>
          Order now
        </Button>
        <Button
          variant="outlined"
          onClick={() => {
            addMeal({ ...meal, quantity: qty });
            enqueueSnackbar('The meal added successfully to cart', {
              variant: 'success',
            });
          }}
        >
          Add to cart
        </Button>
      </Box>
    </Box>
  );
};
MealDetails.defaultProps = {
  meal: {},
};
MealDetails.propTypes = {
  meal: propTypes.shape({
    id: propTypes.number,
    name: propTypes.string,
    price: propTypes.number,
    quantity: propTypes.number,
    category: propTypes.shape({ name: propTypes.string }),
  }),
};
