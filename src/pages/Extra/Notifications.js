import React from "react";

export default function Notifications({ setPage }) {
  return (
    <div style={{ padding: "20px" }}>
      <h2>🔔 Notifications</h2>

      <p>🚜 Booking Confirmed</p>
      <p>💳 Payment Successful</p>
      <p>📦 Equipment Added</p>

      <button onClick={() => setPage("home")}>⬅ Back</button>
    </div>
  );
}