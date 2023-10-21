import { createContext, useReducer } from "react";

// Initial state for the cart
const initialCartState = {
  items: [],
  totalPrice: 0,
};

export function calculateTotalPrice(objects) {
  let price = 0;
  for (let i = 0; i < objects.length; i++) {
    price += objects[i].price * objects[i].quantity;
  }
  return price;
}

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const newItem = action.payload;
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === newItem.id
      );
      if (existingItemIndex !== -1) {
        const updatedCart = [...state.items];
        updatedCart[existingItemIndex].quantity += newItem.quantity;
        const newPrice = calculateTotalPrice(updatedCart);
        return { ...state, items: updatedCart, totalPrice: newPrice };
      } else {
        const updatedCart = [...state.items, newItem];
        const newPrice = calculateTotalPrice(updatedCart);
        return { ...state, items: updatedCart, totalPrice: newPrice };
      }
    case "REMOVE_FROM_CART":
      const filteredItems = state.items.filter(
        (item) => item.id !== action.payload
      );
      const newPrice = calculateTotalPrice(filteredItems);
      return { ...state, items: filteredItems, totalPrice: newPrice };
    default:
      return state;
  }
};

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const value = useReducer(cartReducer, initialCartState);
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
