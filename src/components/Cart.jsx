import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./style.css";

const BASE_URL = 'http://localhost:9090/back1';

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/payment"); // Navigate to Payment Page
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img
                src={`${BASE_URL}/api/products/images/${item.imagePath}`}
                alt={item.name}
              />
              <h4>{item.name}</h4>
              <p>${item.price}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <button onClick={handleCheckout}>Proceed to Checkout</button>
        </>
      )}
    </div>
  );
};

export default Cart;
