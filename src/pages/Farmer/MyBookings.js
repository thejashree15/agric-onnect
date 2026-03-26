import React, { useEffect, useState } from "react";

export default function MyBookings({ setPage }) {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(data);
  }, []);

  const totalAmount = bookings.reduce((sum, b) => sum + b.price, 0);

  return (
    <div style={{ padding: "20px", background: "#f1f8e9", minHeight: "100vh" }}>
      <h2 style={{ textAlign: "center", color: "#2e7d32" }}>
        📋 ನನ್ನ ಬುಕ್ಕಿಂಗ್‌ಗಳು (My Bookings)
      </h2>

      <p><b>ಒಟ್ಟು ಬುಕ್ಕಿಂಗ್‌ಗಳು:</b> {bookings.length}</p>
      <p><b>ಒಟ್ಟು ವೆಚ್ಚ:</b> ₹{totalAmount}</p>

      {bookings.length === 0 && <p>No bookings yet</p>}

      {bookings.map((b, i) => (
        <div key={i} style={{
          background: "white",
          padding: "15px",
          borderRadius: "10px",
          marginBottom: "10px",
          boxShadow: "0px 2px 5px rgba(0,0,0,0.1)"
        }}>
          <p>🚜 <b>{b.name}</b></p>
          <p>💰 ₹{b.price}</p>
          <p>📌 ಸ್ಥಿತಿ: {b.status}</p>
          <p>💳 ಪಾವತಿ: {b.method}</p>
        </div>
      ))}

      <button onClick={() => setPage("home")}>
        ⬅ ಹಿಂದಕ್ಕೆ
      </button>
    </div>
  );
}