import React, { useState } from "react";
import CartContext from "./Cart-context";

const CartProvider = (props) => {
  const [items, updateItems] = useState([]);
  const addItemToCartHandler = (item) => {
    updateItems([...items, item]);
    cartContext.items.push(item);
  };

  const removeItemFromCartHandler = (id) => {};

  const cartContext = {
    items: items,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
