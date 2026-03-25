import React, { useState } from "react";

export default function BookingPage({ setPage, item }) {
  const [driver, setDriver] = useState("Driver 1");

  const handleBooking = async () => {
    await fetch("http://localhost:5000/api/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        equipment: item._id, // 🔥 important
        driver
      })
    });

    alert("Booking Successful ✅");
    setPage("mybookings");
  };

  return (
    <div>
      <h2>📅 Booking Page</h2>

      <p>🚜 {item.name}</p>
      <p>💰 ₹{item.price}</p>

      <select onChange={(e) => setDriver(e.target.value)}>
        <option>Driver 1</option>
        <option>Driver 2</option>
      </select>

      <br /><br />

      <button onClick={handleBooking}>
        Confirm Booking
      </button>

      <br /><br />
      <button onClick={() => setPage("search")}>Back</button>
    </div>
  );
}