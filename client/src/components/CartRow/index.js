import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import propTypes from 'prop-types';

export const CartRow = ({ mealName, restaurantName, mealPrice }) => {
  const [quantity, setQyantity] = useState(1);
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
          <Typography variant="h4">{mealName}</Typography>
          <Typography variant="caption" fontSize={12} color="primary">
            {restaurantName}
          </Typography>
        </Box>
        <Typography variant="subtitle" width="20%">
          ${mealPrice}
        </Typography>
        <Box width="20%">
          <input
            id="quantity"
            type="number"
            value={quantity}
            onChange={(e) => setQyantity(e.target.value)}
            style={{
              width: '35px',
              borderRadius: '0',
              border: 0,
              textAlign: 'center',
            }}
          />
        </Box>
        <Typography variant="h4" width="15%">
          ${mealPrice * quantity}
        </Typography>
        <IconButton aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </Box>
    </>
  );
};

CartRow.defaultProps = {
  mealName: '',
  restaurantName: '',
  mealPrice: '',
};
CartRow.propTypes = {
  mealName: propTypes.number,
  restaurantName: propTypes.string,
  mealPrice: propTypes.number,
};
