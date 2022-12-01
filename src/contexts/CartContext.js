import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {}
});

export default CartContext;

export const CartContextProvider = (props) => {
  const addItemToCart = (item) => {};

  const removeItemFromCart = (id) => {};

  const CartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCart,
    removeItem: removeItemFromCart
  };

  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};
