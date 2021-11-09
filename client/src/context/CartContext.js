import {
  useEffect,
  useState,
  createContext,
  useMemo,
  useCallback,
} from 'react';
import propTypes from 'prop-types';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(
    () => JSON.parse(localStorage.getItem('cart')) || []
  );
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addMeal = useCallback(
    ({ id, name, price, quantity = 1, category }) => {
      const foundMeal = cart.find((meal) => meal.id === id);
      if (foundMeal) {
        setCart([
          ...cart.filter((meal) => meal.id !== id),
          { ...foundMeal, quantity },
        ]);
      } else {
        setCart([
          ...cart,
          { id, name, price, quantity, order: cart.length, category },
        ]);
      }
    },
    [cart]
  );

  const changeQty = useCallback(
    ({ id, quantity }) => {
      const foundMeal = cart.find((meal) => meal.id === id);
      setCart([
        ...cart.filter((meal) => meal.id !== id),
        { ...foundMeal, quantity },
      ]);
    },
    [cart]
  );

  const sortedCart = useMemo(
    () => cart.sort((a, b) => a.order - b.order),
    [cart]
  );

  return (
    <CartContext.Provider value={{ cart: sortedCart, addMeal, changeQty }}>
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
