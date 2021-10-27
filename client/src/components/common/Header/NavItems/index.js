import React from 'react';
import propTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

export const NavItems = ({ navItems }) => (
  <nav className="nav-items">
    <Box>
      {navItems.map((navItem) => (
        <Link
          key={Math.random() * 100}
          component={RouterLink}
          color="common.white"
          px={2.2}
          underline="hover"
          to={navItem.to}
        >
          {navItem.label}
        </Link>
      ))}
    </Box>
  </nav>
);
NavItems.defaultProps = {
  navItems: [],
};
NavItems.propTypes = {
  navItems: propTypes.arrayOf(
    propTypes.shape({ to: propTypes.string, label: propTypes.string })
  ),
};
