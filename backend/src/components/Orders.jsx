import React from "react";
import { useCart } from "../context/CartContext";
import "./style.css"

const PaymentHistory = () => {
  const { paymentHistory } = useCart();

  return (
    <div className="history-container">
      <h2>Payment History</h2>
      {paymentHistory.length === 0 ? (
        <p>No past payments</p>
      ) : (
        <ul>
          {paymentHistory.map((transaction) => (
            <li key={transaction.id}>
              <p><strong>Transaction Date:</strong> {transaction.date}</p>
              <ul>
                {transaction.items.map((item) => (
                  <li key={item.id}>
                    {item.name} - ${item.price}
                  </li>
                ))}
              </ul>
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PaymentHistory;
