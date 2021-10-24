import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import { HamburgerMenu } from './HamburgerMenu';
import { NavItems } from './NavItems';
import Logo from '../../../assets/logo.png';

import './style.css';

export const Header = () => {
  const [isMobile, setIsMobile] = useState('');
  const updateWindowState = () => {
    setIsMobile(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', updateWindowState);
  }, []);
  return (
    <header className="header">
      <Container maxWidth="lg">
        <Grid
          container
          spacing={2}
          alignItems="center"
          sx={{ height: '100px' }}
        >
          <Grid item xs={6} sm={7} md={4}>
            <div className="site-logo">
              <Link to="/">
                <img src={Logo} alt="site-logo" />
              </Link>
            </div>
          </Grid>
          <Grid
            item
            xs={2}
            sm={3}
            md={6}
            justifyContent="flex-end"
            display="flex"
          >
            {isMobile <= 768 ? <HamburgerMenu /> : <NavItems />}
          </Grid>
          <Grid
            item
            xs={4}
            sm={2}
            md={2}
            justifyContent="flex-end"
            display="flex"
          >
            <div className="login-signup-btns">
              <Button
                variant="outlined"
                sx={{ color: '#fff', borderColor: '#fff' }}
              >
                <Link
                  to="/login"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  Login
                </Link>
              </Button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </header>
  );
};
