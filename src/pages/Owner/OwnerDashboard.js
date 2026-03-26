import React, { useState } from "react";
import "./Owner.css";

import AddEquipment from "./AddEquipment";
import MyEquipment from "./MyEquipment";
import OwnerBookings from "./OwnerBookings";

export default function OwnerDashboard({ setRole }) {
  const [page, setPage] = useState("");

  if (page === "add") return <AddEquipment setPage={setPage} />;
  if (page === "list") return <MyEquipment setPage={setPage} />;
  if (page === "bookings") return <OwnerBookings setPage={setPage} />;

  return (
    <div className="owner-page">

      {/* 🔴 LOGOUT BUTTON */}
      <div style={{ position: "absolute", top: "10px", right: "20px" }}>
        <button
          onClick={() => setRole("")}
          className="owner-btn"
        >
          🚪 Logout
        </button>
      </div>

      {/* Sidebar */}
      <div className="owner-sidebar">
        <h2>AgriConnect</h2>

        <button
          onClick={() => setPage("add")}
          className="owner-btn"
        >
          ➕ Add Equipment
        </button>

        <button
          onClick={() => setPage("list")}
          className="owner-btn"
        >
          📦 My Equipment
        </button>

        <button
          onClick={() => setPage("bookings")}
          className="owner-btn"
        >
          📋 Bookings
        </button>
      </div>

      {/* Main Content */}
      <div className="owner-main">
        <h1>Owner Dashboard</h1>

        <div className="owner-grid">

          <div className="owner-card">
            <h3>Add Equipment</h3>
            <p>Upload tractors & tools</p>
          </div>

          <div className="owner-card">
            <h3>Manage Equipment</h3>
            <p>View your listed items</p>
          </div>

          <div className="owner-card">
            <h3>Bookings</h3>
            <p>Track orders</p>
          </div>

        </div>
      </div>

    </div>
  );
}