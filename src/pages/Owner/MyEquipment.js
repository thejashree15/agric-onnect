import React, { useEffect, useState } from "react";

function MyEquipment({ setPage }) {
  const [equipmentList, setEquipmentList] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from backend
  useEffect(() => {
    fetch("http://localhost:5000/api/equipment")
      .then((res) => res.json())
      .then((data) => {
        setEquipmentList(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <h2>My Equipment</h2>

      {/* Loading */}
      {loading && <p>Loading...</p>}

      {/* No Data */}
      {!loading && equipmentList.length === 0 && (
        <p>No equipment found</p>
      )}

      {/* Equipment List */}
      <div className="grid">
        {equipmentList.map((item) => (
          <div className="card" key={item._id}>
            <h3>{item.name}</h3>
            <p><b>Type:</b> {item.type}</p>
            <p><b>Price:</b> ₹{item.price}</p>
          </div>
        ))}
      </div>

      <br />

      <button className="back-btn" onClick={() => setPage("")}>
        ⬅ Back
      </button>
    </div>
  );
}

export default MyEquipment;