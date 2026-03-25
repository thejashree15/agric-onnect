import React, { useState } from "react";
import AddEquipment from "./AddEquipment";
import MyEquipment from "./MyEquipment";
import OwnerBookings from "./OwnerBookings";

export default function OwnerDashboard() {
  const [page, setPage] = useState("");

  if (page === "add") return <AddEquipment setPage={setPage} />;
  if (page === "list") return <MyEquipment setPage={setPage} />;
  if (page === "bookings") return <OwnerBookings setPage={setPage} />;

  return (
    <div className="dashboard">

      {/* Sidebar */}
      <div className="sidebar">
        <h2>AgriConnect</h2>

        <button onClick={() => setPage("add")}>➕ Add Equipment</button>
        <button onClick={() => setPage("list")}>📦 My Equipment</button>
        <button onClick={() => setPage("bookings")}>📋 Bookings</button>
      </div>

      {/* Main Content */}
      <div className="main">
        <h1>Owner Dashboard</h1>

        <div className="grid">
          <div className="card">
            <h3>Add Equipment</h3>
            <p>Upload tractors & tools</p>
          </div>

          <div className="card">
            <h3>Manage Equipment</h3>
            <p>View your listed items</p>
          </div>

          <div className="card">
            <h3>Bookings</h3>
            <p>Track orders</p>
          </div>
        </div>
      </div>

    </div>
  );
}