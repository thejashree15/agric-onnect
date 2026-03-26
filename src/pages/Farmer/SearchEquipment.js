import React, { useState } from "react";

export default function SearchEquipment({ setPage }) {
  const [search, setSearch] = useState("");

  // ✅ 10+ Equipment (frontend demo data)
  const equipmentList = [
    { name: "Tractor", price: 1000, location: "Bangalore" },
    { name: "Harvester", price: 2000, location: "Mysore" },
    { name: "Rotavator", price: 800, location: "Tumkur" },
    { name: "Plough", price: 500, location: "Mandya" },
    { name: "Seeder", price: 700, location: "Hassan" },
    { name: "Sprayer", price: 400, location: "Chitradurga" },
    { name: "Water Pump", price: 600, location: "Kolar" },
    { name: "Cultivator", price: 900, location: "Davangere" },
    { name: "Thresher", price: 1200, location: "Belgaum" },
    { name: "Mini Tractor", price: 1100, location: "Shimoga" }
  ];

  // 🔍 Filter search
  const filtered = equipmentList.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>🔍 Search Equipment</h2>

      {/* 🔍 Search Input */}
      <input
        type="text"
        placeholder="Search equipment..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          width: "100%",
          marginBottom: "15px"
        }}
      />

      {/* ❗ No result */}
      {filtered.length === 0 && <p>No equipment found</p>}

      {/* ✅ List */}
      {filtered.map((item, index) => (
        <div key={index} style={{
          border: "1px solid #ccc",
          padding: "10px",
          marginBottom: "10px"
        }}>
          <p>🚜 {item.name}</p>
          <p>💰 ₹{item.price}/day</p>
          <p>📍 {item.location}</p>

          <button onClick={() => setPage({ name: "booking", item })}>
            Book Equipment
          </button>
        </div>
      ))}

      <br />
      <button onClick={() => setPage("home")}>⬅ Back</button>
    </div>
  );
}