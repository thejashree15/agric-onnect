import React, { useEffect, useState } from "react";

export default function SearchEquipment({ setPage }) {
  const [equipment, setEquipment] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/equipment")
      .then(res => res.json())
      .then(data => setEquipment(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h2>🔍 Equipment List</h2>

      {equipment.length === 0 && <p>No equipment available</p>}

      {equipment.map((item) => (
        <div key={item._id}>
          <p>
            🚜 {item.name} - ₹{item.price}/day - {item.location}
          </p>

          {/* ✅ IMPORTANT */}
          <button onClick={() => setPage({ name: "booking", item })}>
            Book Equipment
          </button>
        </div>
      ))}

      <br />
      <button onClick={() => setPage("home")}>Back</button>
    </div>
  );
}