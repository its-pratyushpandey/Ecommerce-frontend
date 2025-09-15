import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";


import { useCart } from "../context/CartContext";


const Payment = () => {
  const { cartItems, completePayment } = useCart();
  const navigate = useNavigate();

  const handlePayment = () => {
    completePayment(); // Clear cart and save payment history
    alert("Payment Successful!");
    navigate("/orders"); // Navigate to payment history page
  };

  return (
    <div className="payment-container">
      <h2>Payment</h2>
      {cartItems.length === 0 ? (
        <p>No items to checkout</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id}>
              <h4>{item.name}</h4>
              <p>${item.price}</p>
            </div>
          ))}
          <button onClick={handlePayment}>Pay Now</button>
        </>
      )}
    </div>
  );
};

export default Payment;
