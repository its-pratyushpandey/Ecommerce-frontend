import React, { useState } from "react";
import { processPayment } from "../services/paymentService";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCvv] = useState("");
  const navigate = useNavigate();

  const handlePayment = async () => {
    const success = await processPayment({ cardNumber, cvv });
    if (success) {
      alert("Payment Successful!");
      navigate("/");
    } else {
      alert("Payment Failed. Try again.");
    }
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <input type="text" placeholder="Card Number" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
      <input type="text" placeholder="CVV" value={cvv} onChange={(e) => setCvv(e.target.value)} />
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
};

export default Checkout;
