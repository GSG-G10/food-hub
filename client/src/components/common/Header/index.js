import React from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { Link, Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { MenuDrawer } from './MenuDrawer';
import { NavItems } from './NavItems';
import Logo from '../../../assets/logo.png';

const navItems = [
  { label: 'Restaurants', to: 'restaurants' },
  { label: 'Categories', to: 'categories' },
  { label: 'About Us', to: 'aboutus' },
];

export const Header = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.up('sm'));

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
        <Box width={isMobile ? '15%' : '25%'}>
          <Link to="/">
            <img src={Logo} alt="site-logo" style={{ width: '100%' }} />
          </Link>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          flexDirection={!isMobile ? 'row-reverse' : ''}
        >
          {isMobile ? (
            <NavItems navItems={navItems} />
          ) : (
            <MenuDrawer navItems={navItems} />
          )}
          <Button
            variant="outlined"
            component={RouterLink}
            to="/login"
            color="white"
            sx={{ borderColor: 'common.white' }}
          >
            Login
          </Button>
        </Box>
      </Container>
    </Box>
  );
};
