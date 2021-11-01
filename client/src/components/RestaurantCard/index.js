import { useHistory } from 'react-router-dom';
import propTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';

export const RestaurantCard = ({
  restaurantId,
  restaurantLogo,
  restaurantName,
}) => {
  const history = useHistory();
  const handleClick = () => {
    history.push(`/restaurant/${restaurantId}`);
  };
  return (
    <Card
      sx={{
        maxWidth: '100%',
        boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;',
      }}
      variant="outlined"
    >
      <CardActionArea onClick={handleClick}>
        <Box display="flex" alignItems="center" justifyContent="center" p={2}>
          <CardMedia
            component="img"
            height="150"
            // sx={{ width: '170px' }}
            image={restaurantLogo}
            alt={restaurantName}
          />
        </Box>
        <CardContent sx={{ borderTop: '1px solid rgb(241 241 241)' }}>
          <Typography gutterBottom variant="h4" component="div">
            {restaurantName}
          </Typography>
          {/* <Typography variant="subtitle" color="text.secondary">
            {}
          </Typography> */}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

RestaurantCard.defaultProps = {
  restaurantId: '',
  restaurantLogo: '',
  restaurantName: '',
};
RestaurantCard.propTypes = {
  restaurantId: propTypes.number,
  restaurantLogo: propTypes.string,
  restaurantName: propTypes.string,
};
