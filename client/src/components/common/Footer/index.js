import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import './style.css';

export const Footer = () => {
  const footerTopItems = [
    'About Us',
    'Contact Us',
    'Careers',
    'Privacy Policy',
    'FAQ',
  ];
  const popularRestaurants = [
    'Orgada Burger',
    'Pizza House',
    'Buffalo Wings & Rings',
    'Trio Shawerma',
    'Burger Space',
  ];
  return (
    <footer className="footer">
      <Container maxWidth="lg" className="footer-container">
        <div className="nav-items">
          <ul>
            {footerTopItems.map((item) => (
              <li key={Math.random() * 100}>{item}</li>
            ))}
          </ul>
        </div>
        <hr className="footer-line" />
        <div className="content">
          <Grid container alignItems="center" justifyContent="space-between">
            {[1, 2, 3, 4].map((key) => (
              <Grid item key={key}>
                <h4 className="list-title">Popular Restaurants</h4>
                <ul>
                  {popularRestaurants.map((item) => (
                    <li key={Math.random() * 100}>{item}</li>
                  ))}
                </ul>
              </Grid>
            ))}
          </Grid>
        </div>
        <hr className="footer-line" />
        <div className="social-copyrights">
          <Grid
            container
            className="socail-icons"
            alignItems="center"
            justifyContent="space-between"
          >
            <Grid item>
              <ul>
                <li>
                  <WhatsAppIcon />
                </li>
                <li>
                  <FacebookOutlinedIcon />
                </li>
                <li>
                  <InstagramIcon />
                </li>
                <li>
                  <TwitterIcon />
                </li>
              </ul>
            </Grid>
            <Grid item>
              <span>©2021 FoodHub</span>
            </Grid>
          </Grid>
        </div>
      </Container>
    </footer>
  );
};
