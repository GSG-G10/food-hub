import { useContext } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { CartRow } from '../../components/CartRow';
import { CartContext } from '../../context/CartContext';

export const Cart = () => {
  const { cart, changeQty } = useContext(CartContext);

  return (
    <Container
      maxWidth="lg"
      sx={{ display: 'flex', flexDirection: 'column', mt: '2rem', mb: '6rem' }}
    >
      <Typography variant="h1" fontWeight="500">
        Your Cart
      </Typography>
      <Box
        display="flex"
        justifyContent="space-around"
        borderBottom="3px solid #000"
        pl={3}
        pb={1}
        mt={8}
        mb={3}
      >
        <Typography variant="h3" width="40%">
          Meal
        </Typography>
        <Typography variant="h3" width="20%">
          Price
        </Typography>
        <Typography variant="h3" width="20%">
          QTY
        </Typography>
        <Typography variant="h3" width="20%">
          Total
        </Typography>
      </Box>
      {cart.map((meal) => (
        <CartRow
          meal={meal}
          handleQtyChange={(e) => {
            changeQty({
              id: meal.id,
              quantity: +e.target.value,
            });
          }}
        />
      ))}

      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Button
          variant="contained"
          color="secondary"
          disableElevation
          sx={{ opacity: '0.7' }}
        >
          Continue shopping
        </Button>
        <Box display="flex" flexDirection="column">
          <Typography variant="caption" mb={0.6}>
            Do you have a coupon?
          </Typography>
          <Box>
            <TextField
              id="outlined-basic"
              size="small"
              label="Enter promo code"
              variant="outlined"
              sx={{ mr: '0.5rem' }}
            />
            <Button variant="contained" color="secondary" disableElevation>
              Apply
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        my={3}
        py={2}
        px={6}
        sx={{ backgroundColor: 'rgba(255, 90,0, 0.14)' }}
      >
        <Typography variant="h2" fontWeight="400">
          Total
        </Typography>
        <Typography variant="h2" fontWeight="400" color="primary">
          ${cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)}
        </Typography>
      </Box>
      <Button
        variant="contained"
        color="primary"
        disableElevation
        sx={{ alignSelf: 'self-end', width: '20%' }}
      >
        CHECK OUT
      </Button>
    </Container>
  );
};
