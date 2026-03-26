import React from "react";

export default function DriverStatus({ setPage }) {
  return (
    <div style={{ padding: "20px" }}>
      <h2>🚚 Driver Status</h2>

      <p>Driver is on the way</p>
      <p>ETA: 20 mins</p>

      <button onClick={() => setPage("home")}>⬅ Back</button>
    </div>
  );
}