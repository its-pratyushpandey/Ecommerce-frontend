import React, { createContext, useState, useContext } from "react";

// Create Cart Context
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [paymentHistory, setPaymentHistory] = useState([]);

  // Function to add item to cart
  const addToCart = (product) => {
    setCartItems((prevCart) => [...prevCart, product]);
  };

  // Function to remove item from cart
  const removeFromCart = (productId) => {
    setCartItems((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Function to complete payment
  const completePayment = () => {
    if (cartItems.length > 0) {
      setPaymentHistory((prevHistory) => [
        ...prevHistory,
        { id: Date.now(), items: cartItems, date: new Date().toLocaleString() },
      ]);
      setCartItems([]); // Empty the cart
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, paymentHistory, completePayment }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use cart context
export const useCart = () => {
  return useContext(CartContext);
};
