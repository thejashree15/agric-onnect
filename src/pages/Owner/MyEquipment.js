import React, { useEffect, useState } from "react";

export default function MyEquipment({ setPage }) {
  const [equipment, setEquipment] = useState([]);

  useEffect(() => {
    // 🔥 Fetch from backend
    fetch("http://localhost:5001/api/equipment")
      .then(res => res.json())
      .then(data => {
        const local = JSON.parse(localStorage.getItem("equipment")) || [];

        // 🔥 Merge backend + local
        setEquipment([...data, ...local]);
      })
      .catch(() => {
        // 🔥 If backend fails → only local
        const local = JSON.parse(localStorage.getItem("equipment")) || [];
        setEquipment(local);
      });
  }, []);

  return (
    <div style={{
      padding: "20px",
      background: "#f1f8e9",
      minHeight: "100vh"
    }}>
      <h2 style={{ textAlign: "center", color: "#2e7d32" }}>
        📦 ನನ್ನ ಉಪಕರಣಗಳು (My Equipment)
      </h2>

      {equipment.length === 0 && <p>No equipment added</p>}

      {equipment.map((item, i) => (
        <div key={i} style={{
          background: "white",
          padding: "15px",
          borderRadius: "10px",
          marginBottom: "10px",
          boxShadow: "0px 2px 5px rgba(0,0,0,0.1)"
        }}>
          <p>🚜 <b>{item.name}</b></p>
          <p>💰 ₹{item.price}</p>
          <p>📍 {item.location}</p>
        </div>
      ))}

      <button onClick={() => setPage("owner")}>
        ⬅ ಹಿಂದಕ್ಕೆ (Back)
      </button>
    </div>
  );
}