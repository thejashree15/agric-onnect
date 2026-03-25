import React from "react";

export default function OwnerBookings({ setPage }) {
  return (
    <div>
      <h2>📋 Owner Bookings</h2>

      <p>Farmer booked Tractor</p>
      <p>Status: Pending</p>

      <button onClick={() => alert("Approved")}>Approve</button>
      <button onClick={() => alert("Rejected")}>Reject</button>

      <br/><br/>
      <button onClick={() => setPage("add")}>Back</button>
    </div>
  );
}