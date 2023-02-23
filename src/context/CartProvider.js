import React, { useState } from "react";

export const CartContex = React.createContext([]);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      setCart(
        cart.map((product) => {
          return product.id === item.id
            ? { ...product, quantity: product.quantity + quantity }
            : product;
        })
      );
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const isInCart = (id) =>
    cart.find((item) => item.id === id) ? true : false;

  const clear = () => setCart([]);

  const removeItem = (id) => setCart(cart.filter((item) => item.id !== id));

  const totalPrice = () => {
    return cart.reduce(
      (acc, current) => acc + current.quantity * current.price,
      0
    );
  };

  const totalProducts = () => {
    return cart.reduce((acc, current) => acc + current.quantity, 0);
  };
  
  return (
    <CartContex.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clear,
        isInCart,
        totalPrice,
        totalProducts,
      }}
    >
      {children}
    </CartContex.Provider>
  );
};

export default CartProvider;
