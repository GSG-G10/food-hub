import { useContext, useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useHistory } from 'react-router-dom';
import { CartRow } from '../../components/CartRow';
import { CartContext } from '../../context/CartContext';
import { useAuthContext } from '../../firebase/firebaseHook';
import { api } from '../../api/axios';

export const Cart = () => {
  const { cart, changeQty, deleteMeal } = useContext(CartContext);
  const { token } = useAuthContext();
  const [promocode, setCode] = useState('');
  const [codeError, setCodeError] = useState('');
  const [newPrice, setNewPrice] = useState(null);

  const history = useHistory();

  const totalPrice = cart.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );

  const redeem = async () => {
    const info = { promocode, totalPrice };
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    try {
      const { data } = await api.post('/promo/redeem', info, { headers });
      setCodeError('');
      setNewPrice(data.data);
    } catch (err) {
      setCodeError(err.response.data.message);
    }
  };

  const handleChange = (event) => {
    setCode(event.target.value);
  };

  const handleClick = () => {
    history.goBack();
  };

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
          handleDeleteMeal={() => {
            deleteMeal(meal);
          }}
        />
      ))}

      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Button
          variant="contained"
          color="secondary"
          disableElevation
          sx={{ opacity: '0.7' }}
          onClick={handleClick}
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
              onChange={handleChange}
              error={codeError}
              helperText={codeError}
            />

            <Button
              variant="contained"
              color="secondary"
              disableElevation
              onClick={redeem}
            >
              Apply
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        my={3}
        py={2}
        px={6}
        sx={{ backgroundColor: 'rgba(255, 90,0, 0.14)' }}
      >
        {newPrice ? (
          <Box>
            <Box display="flex" justifyContent="space-evenly">
              <Typography variant="h2" fontWeight="400">
                Total price
              </Typography>
              <Typography
                variant="h2"
                fontWeight="400"
                color="primary"
                sx={{ textDecoration: 'line-through' }}
              >
                ${totalPrice}
              </Typography>
            </Box>

            <Box display="flex" justifyContent="space-evenly">
              <Typography variant="h2" fontWeight="400">
                New price
              </Typography>
              <Typography variant="h2" fontWeight="400" color="primary">
                ${newPrice}
              </Typography>
            </Box>
          </Box>
        ) : (
          <Box display="flex" justifyContent="space-evenly">
            <Typography variant="h2" fontWeight="400">
              Total price
            </Typography>
            <Typography variant="h2" fontWeight="400" color="primary">
              ${totalPrice}
            </Typography>
          </Box>
        )}
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
