import React from 'react';
import Container from '@mui/material/Container';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

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
    <Box component="footer" bgcolor="secondary.main" color="common.white">
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Box display="flex" justifyContent="space-between" py={4}>
          {footerTopItems.map((item) => (
            <Link
              href="/"
              key={Math.random() * 100}
              underline="none"
              color="common.white"
              fontSize="0.85em"
            >
              {item}
            </Link>
          ))}
        </Box>
        <Divider color="#8d8d8d" />
        <Box
          className="content"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          flexWrap="wrap"
          pt={4}
          pb={2}
        >
          {[1, 2, 3, 4].map((key) => (
            <Box item key={key} mb={1.8}>
              <Typography variant="h6" color="#898989" mb={0.8} fontSize={16}>
                Popular Restaurants
              </Typography>
              <Box>
                {popularRestaurants.map((item) => (
                  <Link
                    href="/"
                    key={Math.random() * 100}
                    underline="none"
                    color="common.white"
                    fontSize="0.8em"
                    display="block"
                    mb={0.8}
                  >
                    {item}
                  </Link>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
        <Divider color="#8d8d8d" />
        <Box py={2}>
          <Box
            container
            className="socail-icons"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box width="15%" display="flex" justifyContent="space-between">
              <Link href="/" color="common.white">
                <WhatsAppIcon sx={{ fontSize: 26 }} />
              </Link>
              <Link href="/" color="common.white">
                <FacebookOutlinedIcon sx={{ fontSize: 26 }} />
              </Link>
              <Link href="/" color="common.white">
                <InstagramIcon sx={{ fontSize: 26 }} />
              </Link>
              <Link href="/" color="common.white">
                <TwitterIcon sx={{ fontSize: 26 }} />
              </Link>
            </Box>
            <Box>
              <Typography variant="suntitle1">©2021 FoodHub</Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
