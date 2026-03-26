import React from "react";

export default function Payment({ setPage, item }) {

  const handlePayment = (method) => {
    const existing = JSON.parse(localStorage.getItem("bookings")) || [];

    const newBooking = {
      ...item,
      status: "Paid",
      method: method
    };

    localStorage.setItem("bookings", JSON.stringify([...existing, newBooking]));

    alert("✅ ಪಾವತಿ ಯಶಸ್ವಿಯಾಗಿದೆ!");

    setPage("mybookings");
  };

  return (
    <div style={{
      padding: "20px",
      textAlign: "center",
      background: "#f1f8e9",
      minHeight: "100vh"
    }}>
      <h2>💳 ಪಾವತಿ (Payment)</h2>

      <p>🚜 {item?.name}</p>
      <p>💰 ₹{item?.price}</p>

      <div style={{ marginTop: "20px" }}>

        <button onClick={() => handlePayment("Cash")} style={{ margin: "10px" }}>
          💰 ನಗದು
        </button>

        <button onClick={() => handlePayment("Google Pay")} style={{ margin: "10px" }}>
          📱 Google Pay
        </button>

        <button onClick={() => handlePayment("PhonePe")} style={{ margin: "10px" }}>
          🏦 PhonePe
        </button>

      </div>

      <br />
      <button onClick={() => setPage("home")}>
        ⬅ ಹಿಂದಕ್ಕೆ
      </button>
    </div>
  );
}