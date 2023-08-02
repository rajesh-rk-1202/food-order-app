import React, { useReducer } from "react";
import CartContext from "./cart-context";
import { act } from "react-dom/test-utils";

const defaultCartState = {
  items: [],
  totleAmount: 0,
};

const cartReducer = (state, action) => {
  if ((action.type = "ADD")) {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount =
      state.totleAmount + action.item.price * action.item.amount;

    return {
      items: updatedItems,
      totleAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };
  const cartContext = {
    items: cartState.items,
    totleAmount: cartState.totleAmount,
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
