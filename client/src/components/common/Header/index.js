import { useState } from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { MenuDrawer } from './MenuDrawer';
import { NavItems } from './NavItems';
import Logo from '../../../assets/logo.png';
import { LoginWindow } from '../../LoginWindow';
import { useAuthContext } from '../../../firebase/firebaseHook';

const navItems = [
  { label: 'Restaurants', to: 'restaurants' },
  { label: 'Categories', to: 'categories' },
  { label: 'About Us', to: 'aboutus' },
];

export const Header = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.up('sm'));
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuthContext();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleLogout = () => logout();

  return (
    <Box component="header" bgcolor="primary.main">
      <Container
        maxWidth="lg"
        sx={{
          height: '70px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box>
          <Link to="/">
            <img src={Logo} alt="site-logo" />
          </Link>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          flexDirection={{ sm: 'row', xs: 'row-reverse' }}
        >
          {isMobile ? (
            <NavItems navItems={navItems} />
          ) : (
            <MenuDrawer navItems={navItems} />
          )}

          {user && localStorage.getItem('auth', 'true') ? (
            <Button
              variant="outlined"
              color="white"
              sx={{ borderColor: 'common.white' }}
              onClick={handleLogout}
            >
              Logout
            </Button>
          ) : (
            <Button
              variant="outlined"
              color="white"
              sx={{ borderColor: 'common.white' }}
              onClick={handleOpen}
            >
              Login
            </Button>
          )}

          <LoginWindow
            handleOpen={handleOpen}
            open={open}
            handleClose={handleClose}
          />
        </Box>
      </Container>
    </Box>
  );
};
