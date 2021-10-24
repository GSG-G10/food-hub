import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './style.css';

export const NavItems = ({ navLinksMenu }) => {
  const navItems = ['Restaurants', 'Categories', 'About Us'];
  return (
    <nav className="nav-items">
      <ul className={`nav-links ${navLinksMenu}`}>
        {navItems.map((navItem) => (
          <li key={Math.random() * 100}>
            <Link to={`/${navItem.replace(' ', '')}`}>{navItem}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
NavItems.defaultProps = {
  navLinksMenu: '',
};
NavItems.propTypes = {
  navLinksMenu: PropTypes.string,
};
