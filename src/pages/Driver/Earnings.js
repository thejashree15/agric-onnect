import React, { useEffect, useState } from "react";

export default function Earnings({ setPage }) {
  const [earnings, setEarnings] = useState(0);

  useEffect(() => {
    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    const completed = bookings.filter(b => b.status === "Completed");

    const total = completed.reduce((sum, b) => sum + b.price, 0);
    setEarnings(total);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>💰 Earnings</h2>

      <p>Total Earnings: ₹{earnings}</p>

      <button onClick={() => setPage("driver")}>⬅ Back</button>
    </div>
  );
}