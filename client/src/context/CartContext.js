import { useState, createContext } from 'react';
import propTypes from 'prop-types';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  localStorage.setItem('cart', JSON.stringify(cart));
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

CartProvider.defaultProps = {
  children: null,
};
CartProvider.propTypes = {
  children: propTypes.element,
};
