import React from "react";

export default function BookingPage({ setPage, item }) {

  if (!item) return <h2>No item selected</h2>;

  const goToPayment = () => {
    // 🔥 PASS DATA TO PAYMENT
    setPage({ name: "payment", item });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>📦 Booking Page</h2>

      <p>🚜 {item.name}</p>
      <p>💰 ₹{item.price}</p>
      <p>📍 {item.location}</p>

      <button onClick={goToPayment}>
        💳 Proceed to Payment
      </button>

      <br /><br />
      <button onClick={() => setPage("search")}>
        ⬅ Back
      </button>
    </div>
  );
}