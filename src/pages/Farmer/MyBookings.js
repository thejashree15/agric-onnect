import React, { useEffect, useState } from "react";

export default function MyBookings({ setPage }) {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/bookings")
      .then(res => res.json())
      .then(data => setBookings(data));
  }, []);

  return (
    <div>
      <h2>📋 My Bookings</h2>

      {bookings.map((b) => (
        <div key={b._id}>
          <p>🚜 {b.equipment?.name}</p>
          <p>💰 ₹{b.equipment?.price}</p>
          <p>📍 {b.equipment?.location}</p>
          <p>👨‍🔧 {b.driver}</p>

          <button onClick={() => setPage("payment")}>
            Pay Now
          </button>
        </div>
      ))}

      <br />
      <button onClick={() => setPage("search")}>Back</button>
    </div>
  );
}